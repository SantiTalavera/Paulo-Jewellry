import Header from '../components/common/Header'; 
import InventoryStats from '../components/inventory/InventoryStats';
import InventoryGrid from '../components/inventory/InventoryGrid';
import { Plus, Filter } from 'lucide-react';

const Inventory = () => {
  return (
    <div className="container-fluid pb-5">
      <Header 
        title="Inventory" 
        subtitle="Real-time valuation and stock management." 
      >
         <button className="btn btn-outline-secondary d-flex align-items-center gap-2 rounded-pill px-3" style={{borderColor: 'var(--border-color)', color: 'var(--text-main)'}}>
             <Filter size={16} />
             <span>Filter</span>
         </button>
         <button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-4 text-dark fw-bold">
             <Plus size={18} />
             <span>Add Item</span>
         </button>
      </Header>

      <InventoryStats />
      
      <div className="d-flex gap-2 mb-4 overflow-auto pb-2 scrollbar-hide">
          <button className="btn btn-dark rounded-pill px-4 fw-medium text-white shadow-sm" style={{fontSize: '0.9rem'}}>All Items</button>
          <button className="btn btn-light rounded-pill px-4 text-muted border-0 hover-bg-light-darker" style={{fontSize: '0.9rem'}}>18k Gold</button>
          <button className="btn btn-light rounded-pill px-4 text-muted border-0 hover-bg-light-darker" style={{fontSize: '0.9rem'}}>Platinum</button>
          <button className="btn btn-light rounded-pill px-4 text-muted border-0 hover-bg-light-darker" style={{fontSize: '0.9rem'}}>Gemstones</button>
          <button className="btn btn-light rounded-pill px-4 text-muted border-0 hover-bg-light-darker" style={{fontSize: '0.9rem'}}>Ethical</button>
      </div>

      <InventoryGrid />
      
      <div className="d-flex justify-content-center mt-5">
          <nav>
              <ul className="pagination mb-0 gap-2">
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center text-muted hover-bg-light" style={{width: '36px', height: '36px'}}>&lt;</button></li>
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center bg-dark text-white shadow-sm" style={{width: '36px', height: '36px'}}>1</button></li>
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center text-muted hover-bg-light" style={{width: '36px', height: '36px'}}>2</button></li>
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center text-muted hover-bg-light" style={{width: '36px', height: '36px'}}>...</button></li>
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center text-muted hover-bg-light" style={{width: '36px', height: '36px'}}>12</button></li>
                  <li className="page-item"><button className="page-link border-0 rounded-circle d-flex align-items-center justify-content-center text-muted hover-bg-light" style={{width: '36px', height: '36px'}}>&gt;</button></li>
              </ul>
          </nav>
      </div>
    </div>
  );
};

export default Inventory;
