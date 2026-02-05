import { Plus, Search, MoreHorizontal } from 'lucide-react';
import RepairCard from '../components/workshop/RepairCard';

const Workshop = () => {
  return (
    <div className="min-vh-100 text-white p-4" style={{backgroundColor: '#0c0c0c', margin: '-2rem', padding: '2rem'}}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-4 pt-2">
        <div>
            <h2 className="fw-bold mb-1">Workshop Tracking</h2>
            <p className="text-secondary">Manage repair workflows and customer updates.</p>
        </div>
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-medium d-flex align-items-center gap-2">
            <Plus size={18} />
            New Repair Job
        </button>
      </div>

      {/* Filters */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex gap-3">
             <div className="dropdown">
                <button className="btn btn-outline-secondary border-secondary border-opacity-25 text-light dropdown-toggle rounded-pill px-3" type="button">
                    All Repairs
                </button>
             </div>
             <button className="btn btn-outline-secondary border-secondary border-opacity-25 text-secondary rounded-pill px-3">High Priority</button>
             <button className="btn btn-outline-secondary border-secondary border-opacity-25 text-secondary rounded-pill px-3">Overdue</button>
             <button className="btn btn-outline-secondary border-secondary border-opacity-25 text-secondary rounded-pill px-3">Warranty Claims</button>
        </div>
        <div className="position-relative">
             <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={16} />
             <input type="text" className="form-control bg-dark border-secondary border-opacity-25 rounded-pill ps-5 text-white" placeholder="Search ID or Customer..." style={{width: '300px', backgroundColor: '#1e1e1e'}} />
        </div>
      </div>

      {/* Kanban Board */}
      <div className="row g-4">
        {/* Column 1: Received */}
        <div className="col-12 col-xl-4">
            <div className="d-flex justify-content-between align-items-center mb-4 px-1">
                <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold small" style={{letterSpacing: '1px'}}>RECEIVED</span>
                    <span className="badge bg-secondary bg-opacity-25 text-secondary rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>5</span>
                </div>
                <MoreHorizontal size={18} className="text-secondary" />
            </div>
            
            <RepairCard data={{
                id: "#RP-2049",
                title: "Gold Chain Repair",
                description: "Clasp replacement & steam clean.",
                customer: "John Doe",
                customerInitials: "JD",
                image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                statusTag: "High Priority",
                statusAction: "Send Tracking Update"
            }} />

            <RepairCard data={{
                id: "#RP-2051",
                title: "Diamond Setting",
                description: "Resizing (Size 6 -> 7) and prong check.",
                customer: "Alice Smith",
                customerInitials: "AS",
                image: "https://images.unsplash.com/photo-1605100804763-ebea240f2b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                statusAction: "Update Customer"
            }} />
        </div>

        {/* Column 2: In Progress */}
        <div className="col-12 col-xl-4">
            <div className="d-flex justify-content-between align-items-center mb-4 px-1">
                <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold small text-primary" style={{letterSpacing: '1px'}}>IN-PROGRESS</span>
                    <span className="badge bg-primary bg-opacity-25 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>3</span>
                </div>
                <MoreHorizontal size={18} className="text-secondary" />
            </div>

            <RepairCard data={{
                id: "#RP-2042",
                title: "Vintage Restoration",
                description: "Deep clean, polish, and safety chain fix.",
                customer: "M. Roberts",
                customerInitials: "MR",
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                statusBadge: "Polishing",
                statusAction: "Update Customer"
            }} />
        </div>

        {/* Column 3: Quality Control */}
        <div className="col-12 col-xl-4">
             <div className="d-flex justify-content-between align-items-center mb-4 px-1">
                <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold small" style={{letterSpacing: '1px', color: '#a08fff'}}>QUALITY CONTROL</span>
                    <span className="badge bg-opacity-25 text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', backgroundColor: '#a08fff50'}}>2</span>
                </div>
                <MoreHorizontal size={18} className="text-secondary" />
            </div>

            <RepairCard data={{
                id: "#RP-2040",
                title: "Rolex Servicing",
                description: "Movement calibration & sapphire glass.",
                customer: "Clark Kent",
                customerInitials: "CK",
                image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                statusAction: "Notify Delay",
                actionColor: "danger"
            }} />
        </div>

      </div>
    </div>
  );
};

export default Workshop;
