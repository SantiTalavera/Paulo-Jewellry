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
        <div className="p-4 d-flex align-items-center gap-2">
          <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style={{width: '32px', height: '32px'}}>
            <Sparkles size={18} className="text-primary" />
          </div>
          <div>
            <h6 className="mb-0 fw-bold" style={{letterSpacing: '-0.02em'}}>Paulito Jewels</h6>
          </div>
        </div>

        <div className="mt-2">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <small className="text-muted text-uppercase fw-bold mt-4 mb-2 d-block px-4" style={{fontSize: '0.65rem', letterSpacing: '0.05em'}}>Store</small>
          
          <NavLink to="/inventory" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Package size={18} />
            <span>Inventory</span>
          </NavLink>
          
          <NavLink to="/workshop" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <Wrench size={18} />
                <span>Workshop</span>
              </div>
              <span className="badge bg-light text-primary border rounded-pill" style={{fontSize: '0.7rem'}}>3</span>
            </div>
          </NavLink>

          <small className="text-muted text-uppercase fw-bold mt-4 mb-2 d-block px-4" style={{fontSize: '0.65rem', letterSpacing: '0.05em'}}>Business</small>

          <NavLink to="/clients" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Users size={18} />
            <span>Clients</span>
          </NavLink>

          <NavLink to="/sales" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <ShoppingBag size={18} />
            <span>Sales</span>
          </NavLink>

          <NavLink to="/intelligence" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            <Sparkles size={18} />
            <span>Intelligence</span>
          </NavLink>
        </div>
      </div>

      <div className="d-flex flex-column px-3 gap-2">
        <div className="px-3 py-2">
          <div 
            className="d-flex align-items-center justify-content-between p-2 rounded-pill cursor-pointer" 
            style={{backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-color)'}}
            onClick={toggleTheme}
          >
            <div className="d-flex align-items-center gap-2">
              {theme === 'light' ? <Sun size={16} className="text-warning" /> : <Moon size={16} className="text-primary" />}
              <span className="small fw-semibold" style={{fontSize: '0.8rem'}}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            </div>
            
            <div className="position-relative bg-secondary bg-opacity-25 rounded-pill" style={{width: '36px', height: '20px'}}>
              <div 
                className="position-absolute bg-white rounded-circle shadow-sm"
                style={{
                  width: '16px', 
                  height: '16px', 
                  top: '2px', 
                  left: theme === 'light' ? '2px' : '18px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                }}
              ></div>
            </div>
          </div>
        </div>
        <NavLink to="/settings" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} style={{ padding: '0.6rem 1.25rem' }}>
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
