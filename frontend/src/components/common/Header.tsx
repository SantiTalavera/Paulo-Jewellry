import { Search, Bell } from 'lucide-react';

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div>
        <h2 className="fw-bold mb-1">{title}</h2>
        {subtitle && <p className="text-muted mb-0">{subtitle}</p>}
      </div>
      
      <div className="d-flex align-items-center gap-4">
        <div className="position-relative">
          <Search className="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" size={18} />
          <input 
            type="text" 
            className="form-control bg-light border-0 ps-5 rounded-pill" 
            placeholder="Search" 
            style={{width: '300px', height: '45px'}}
          />
        </div>
        
        <div className="position-relative cursor-pointer">
          <Bell className="text-muted" size={20} />
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </div>
        
        <div className="d-flex align-items-center gap-3">
          <div className="text-end d-none d-sm-block">
            <p className="mb-0 fw-bold small">Alexandra G.</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
            alt="Profile" 
            className="rounded-circle"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
