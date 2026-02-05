import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Wrench, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="sidebar d-flex flex-column justify-content-between pb-4">
      <div>
        <div className="p-4 d-flex align-items-center gap-3">
          <div className="bg-warning rounded-circle" style={{width: '40px', height: '40px', background: 'linear-gradient(135deg, #b88746 0%, #fdf5a6 50%, #b88746 100%)'}}></div>
          <div>
            <h5 className="mb-0 fw-bold">LuxeJewels</h5>
            <small className="text-muted">Enterprise Suite</small>
          </div>
        </div>

        <div className="px-3">
          <NavLink to="/" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <small className="text-muted text-uppercase fw-bold mt-4 mb-2 d-block px-3" style={{fontSize: '0.75rem'}}>Store</small>
          
          <NavLink to="/inventory" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <Package size={20} />
            <span>Inventory</span>
          </NavLink>
          
          <NavLink to="/workshop" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <Wrench size={20} />
                <span>Workshop</span>
              </div>
              <span className="badge bg-primary rounded-pill">3</span>
            </div>
          </NavLink>

          <small className="text-muted text-uppercase fw-bold mt-4 mb-2 d-block px-3" style={{fontSize: '0.75rem'}}>Business</small>

          <NavLink to="/clients" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            <span>Clients</span>
          </NavLink>

          <NavLink to="/sales" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <ShoppingBag size={20} />
            <span>Sales</span>
          </NavLink>

          <NavLink to="/intelligence" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
            <Sparkles size={20} />
            <span>Intelligence</span>
          </NavLink>
        </div>
      </div>

      <div className="px-3">
        <NavLink to="/settings" className={({isActive}) => `nav-link rounded mb-1 ${isActive ? 'active' : ''}`}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
