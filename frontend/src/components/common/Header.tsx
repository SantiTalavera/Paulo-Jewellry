import { Search } from 'lucide-react';

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
      <div>
        <h3 className="fw-bold mb-0" style={{letterSpacing: '-0.02em', fontSize: '1.5rem'}}>{title}</h3>
        {subtitle && <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>{subtitle}</p>}
      </div>
      
      <div className="search-container mb-0" style={{maxWidth: '450px', margin: 0}}>
        <div className="position-relative">
          <Search className="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" size={18} />
          <input 
            type="text" 
            className="form-control bg-light ps-5" 
            placeholder="Search..." 
            style={{height: '42px', fontSize: '0.95rem'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
