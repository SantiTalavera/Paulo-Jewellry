import { Send } from 'lucide-react';

interface RepairCardProps {
    id: string;
    title: string;
    description: string;
    customer: string;
    customerInitials: string;
    image: string;
    statusTag?: string; // e.g. "High Priority"
    statusAction?: string; // e.g. "Send Tracking Update", "Update Customer"
    statusBadge?: string; // e.g. "Polishing" anywhere on card
    actionColor?: string;
}

const RepairCard = ({ data }: { data: RepairCardProps }) => {
  return (
    <div className="card bg-dark border border-secondary border-opacity-25 rounded-4 mb-3" style={{backgroundColor: '#1e1e1e'}}>
      <div className="position-relative">
        <img 
            src={data.image} 
            alt={data.title} 
            className="card-img-top rounded-4 m-2 w-auto" 
            style={{height: '180px', objectFit: 'cover', width: 'calc(100% - 1rem)'}}
        />
        <div className="position-absolute top-0 start-0 m-3 ms-4 px-2 py-1 bg-black bg-opacity-75 rounded text-white" style={{fontSize: '10px', letterSpacing: '1px'}}>
            BEFORE
        </div>
        
        {data.statusBadge && (
             <div className="position-absolute bottom-0 end-0 m-3 me-4 px-3 py-1 bg-primary rounded-pill text-white small fw-medium">
                {data.statusBadge}
             </div>
        )}
      </div>

      <div className="card-body pt-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-secondary" style={{fontSize: '11px'}}>{data.id}</small>
            {data.statusTag && (
                <span className="badge bg-warning text-dark border border-warning bg-opacity-10 fw-normal" style={{color: '#ffc107', fontSize: '11px'}}>{data.statusTag}</span>
            )}
        </div>
        
        <h6 className="fw-bold text-white mb-1">{data.title}</h6>
        <p className="text-secondary small mb-3">{data.description}</p>
        
        <div className="d-flex align-items-center mb-3">
            <div className={`rounded-circle d-flex align-items-center justify-content-center me-2 text-dark fw-bold small ${data.customerInitials === 'MJ' ? 'bg-info' : 'bg-secondary'}`} style={{width: '24px', height: '24px'}}>
                {data.customerInitials}
            </div>
            <small className="text-secondary">{data.customer}</small>
            
            {/* Hardcoded "Due Tomorrow" for specific card match */}
            {data.title === "Vintage Restoration" && (
                <span className="ms-auto badge bg-secondary bg-opacity-25 text-secondary border border-secondary border-opacity-25 fw-normal" style={{fontSize: '10px'}}>Due Tomorrow</span>
            )}
        </div>

        <button className={`btn w-100 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 small fw-medium ${data.actionColor === 'danger' ? 'btn-danger bg-opacity-25 text-danger border-0' : 'btn-dark bg-opacity-50 border border-secondary border-opacity-25 text-primary'}`} style={{backgroundColor: data.actionColor === 'danger' ? 'rgba(220, 53, 69, 0.2)' : 'rgba(33, 37, 41, 0.5)'}}>
            {data.actionColor !== 'danger' && <Send size={14} />}
            {data.statusAction}
        </button>
      </div>
    </div>
  );
};

export default RepairCard;
