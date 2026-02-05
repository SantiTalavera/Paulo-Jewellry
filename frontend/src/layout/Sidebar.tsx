import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Wrench, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  Settings,
  MoreVertical,
  ChevronDown,
  ChevronRight,
  Folder,
  Tag
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [storeOpen, setStoreOpen] = useState(true);
  const [businessOpen, setBusinessOpen] = useState(true);

  return (
    <nav className="sidebar d-flex flex-column justify-content-between">
      <div>
        {/* Header matching "Unified Folders" */}
        <div className="nav-header px-3 mt-2">
          <span className="nav-brand-text">Paulito Jewels</span>
          <MoreVertical size={16} className="text-muted cursor-pointer" />
        </div>

        {/* Tree Root 1: Store (Inbox style) */}
        <div className="mt-1">
          <div 
            className="nav-tree-item"
            onClick={() => setStoreOpen(!storeOpen)}
          >
            {storeOpen ? <ChevronDown size={14} className="text-muted me-2" /> : <ChevronRight size={14} className="text-muted me-2" />}
            <Folder size={14} className="text-primary me-2" />
            <span>Store</span>
          </div>

          {storeOpen && (
            <div className="d-flex flex-column">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <LayoutDashboard className="nav-icon" />
                <span>Dashboard</span>
              </NavLink>
              
              <NavLink to="/inventory" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <Package className="nav-icon" />
                <span>Inventory</span>
              </NavLink>
              
              <NavLink to="/workshop" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <Wrench className="nav-icon" />
                <span>Workshop</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* Tree Root 2: Business */}
        <div className="mt-1">
           <div 
            className="nav-tree-item"
            onClick={() => setBusinessOpen(!businessOpen)}
          >
            {businessOpen ? <ChevronDown size={14} className="text-muted me-2" /> : <ChevronRight size={14} className="text-muted me-2" />}
            <Folder size={14} className="text-success me-2" />
            <span>Business</span>
          </div>

          {businessOpen && (
            <div className="d-flex flex-column">
              <NavLink to="/clients" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <Users className="nav-icon" />
                <span>Clients</span>
              </NavLink>

              <NavLink to="/sales" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <ShoppingBag className="nav-icon" />
                <span>Sales</span>
              </NavLink>

              <NavLink to="/intelligence" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                <Sparkles className="nav-icon" />
                <span>Intelligence</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto pb-3">
        {/* Tags / Settings styled as another tree section */}
        <div className="nav-header px-3 mb-1">
          <span className="nav-header-text">Tags</span>
          <MoreVertical size={14} className="text-muted cursor-pointer" />
        </div>

        <NavLink to="/settings" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <Settings className="nav-icon text-muted" />
          <span>Settings</span>
        </NavLink>

        <div 
          className="nav-link cursor-pointer" 
          onClick={toggleTheme}
        >
          <Tag className={`nav-icon ${theme === 'light' ? 'text-warning' : 'text-primary'}`} />
          <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
