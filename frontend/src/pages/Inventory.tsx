// import Header from '../components/common/Header'; 
import InventoryStats from '../components/inventory/InventoryStats';
import InventoryGrid from '../components/inventory/InventoryGrid';
import { Plus } from 'lucide-react';

const Inventory = () => {
    // Inventory view has specific dark styling as per ID request
  return (
    <div className="min-vh-100 text-white p-4" style={{backgroundColor: '#000', margin: '-2rem', padding: '2rem'}}>
        {/* Start Header Replacement for Inventory */}
        <div className="d-flex justify-content-between align-items-center mb-5 pt-3">
             <div>
                 <h1 className="display-4 fw-bold mb-0">Inventory. <span className="text-secondary">Mastered.</span></h1>
                 <p className="text-secondary mt-2">Real-time valuation, ethical tracking, and precise stock management.</p>
             </div>
             <div>
                 <button className="btn btn-primary rounded-pill px-4 py-2 me-3">
                    <Plus size={16} className="me-2 inline-block" />
                    Add New Item
                 </button>
                 <button className="btn btn-link text-secondary text-decoration-none">Export Data &gt;</button>
             </div>
        </div>
        {/* End Header */}

        <InventoryStats />
        
        <div className="d-flex gap-3 mb-4 flex-wrap">
            <button className="btn btn-light rounded-pill px-4 fw-medium">All Items</button>
            <button className="btn btn-outline-secondary rounded-pill px-4 text-white border-dark-subtle">18k Gold</button>
            <button className="btn btn-outline-secondary rounded-pill px-4 text-white border-dark-subtle">Platinum</button>
            <button className="btn btn-outline-secondary rounded-pill px-4 text-white border-dark-subtle">Gemstones</button>
            <button className="btn btn-outline-secondary rounded-pill px-4 text-white border-dark-subtle">Ethical</button>
            <div className="ms-auto">
                 <button className="btn btn-link text-light text-decoration-none small">Newest Added ▼</button>
            </div>
        </div>

        <InventoryGrid />
        
        <div className="d-flex justify-content-center mt-5 pb-5">
            <nav>
                <ul className="pagination pagination-dark">
                    <li className="page-item"><button className="page-link bg-transparent border-0 text-white">&lt;</button></li>
                    <li className="page-item active"><button className="page-link bg-light text-dark border-0 rounded-circle mx-1" style={{width: '36px', height: '36px'}}>1</button></li>
                    <li className="page-item"><button className="page-link bg-transparent border-0 text-white">2</button></li>
                    <li className="page-item"><button className="page-link bg-transparent border-0 text-white">...</button></li>
                    <li className="page-item"><button className="page-link bg-transparent border-0 text-white">12</button></li>
                    <li className="page-item"><button className="page-link bg-transparent border-0 text-white">&gt;</button></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Inventory;
