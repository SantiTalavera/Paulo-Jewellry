import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Wrench, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  Settings,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sidebar d-flex flex-column justify-content-between pb-4">
      <div>
        <div className="px-4 py-3 d-flex align-items-center gap-2 mb-2">
          <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style={{width: '28px', height: '28px'}}>
            <Sparkles size={16} className="text-primary" />
          </div>
          <h6 className="mb-0 fw-bold" style={{letterSpacing: '-0.02em', fontSize: '0.95rem'}}>Paulito Jewels</h6>
        </div>

        <div className="mt-2">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={18} className="nav-icon" />
            <span>Dashboard</span>
          </NavLink>

          <div className="nav-group-label">Inventory</div>
          
          <NavLink to="/inventory" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Package size={18} className="nav-icon" />
            <span>Products</span>
          </NavLink>
          
          <NavLink to="/workshop" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <Wrench size={18} className="nav-icon" />
                <span>Workshop</span>
              </div>
              <span className="badge bg-light text-muted border rounded-pill px-2" style={{fontSize: '0.65rem'}}>3</span>
            </div>
          </NavLink>

          <div className="nav-group-label">Business</div>

          <NavLink to="/clients" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Users size={18} className="nav-icon" />
            <span>Clients</span>
          </NavLink>

          <NavLink to="/sales" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <ShoppingBag size={18} className="nav-icon" />
            <span>Sales History</span>
          </NavLink>

          <NavLink to="/intelligence" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Sparkles size={18} className="nav-icon" />
            <span>Intelligence</span>
          </NavLink>
        </div>
      </div>

      <div className="d-flex flex-column gap-1">
        <NavLink to="/settings" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          <Settings size={18} className="nav-icon" />
          <span>Settings</span>
        </NavLink>

        <div className="px-3 mt-2">
          <div 
            className="d-flex align-items-center justify-content-between p-2 rounded-pill cursor-pointer" 
            style={{backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-color)', margin: '0 0.5rem'}}
            onClick={toggleTheme}
          >
            <div className="d-flex align-items-center gap-2">
              {theme === 'light' ? <Sun size={14} className="text-warning" /> : <Moon size={14} className="text-primary" />}
              <span className="fw-semibold" style={{fontSize: '0.75rem'}}>{theme === 'light' ? 'Light' : 'Dark'}</span>
            </div>
            
            <div className="position-relative bg-secondary bg-opacity-25 rounded-pill" style={{width: '32px', height: '18px'}}>
              <div 
                className="position-absolute bg-white rounded-circle shadow-sm"
                style={{
                  width: '14px', 
                  height: '14px', 
                  top: '2px', 
                  left: theme === 'light' ? '2px' : '16px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
