import { Search } from 'lucide-react';

const Header = ({ title, subtitle, children }: { title: string, subtitle?: string, children?: React.ReactNode }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
      <div>
        <h3 className="fw-bold mb-0" style={{letterSpacing: '-0.02em', fontSize: '1.85rem'}}> {title} </h3>
        {subtitle && <p className="text-muted mb-0" style={{fontSize: '0.95rem'}}> {subtitle} </p>}
      </div>
      
      <div className="d-flex align-items-center gap-3">
        <div className="search-container mb-0" style={{maxWidth: '450px', margin: 0}}>
            <div className="position-relative">
            <Search className="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" size={19} />
            <input 
                type="text" 
                className="form-control bg-light ps-5" 
                placeholder="Search..." 
                style={{height: '48px', fontSize: '0.98rem'}}
            />
            </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
