import { Sparkles, ArrowRight } from 'lucide-react';

const IntelligenceCard = () => {
    return (
        <div className="card stat-card bg-transparent overflow-hidden position-relative border-0 shadow-none">
            <div className="card-body p-4 d-flex align-items-center gap-4 position-relative z-1 border rounded-4" style={{borderColor: 'var(--border-color) !important'}}>
                 <div className="p-3 bg-primary bg-opacity-10 rounded-circle text-primary">
                    <Sparkles size={24} />
                 </div>
                 <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1" style={{fontSize: '1.25rem'}}>Inventory Intelligence</h5>
                    <p className="text-muted mb-0" style={{maxWidth: '700px', fontSize: '0.95rem'}}>
                        Based on current sales trends, your stock of <span className="fw-bold text-main">18k Gold Chains</span> is predicted to run low by next Tuesday. 
                    </p>
                 </div>
                 <button className="btn btn-dark rounded-pill px-4 py-2 d-flex align-items-center gap-2" style={{fontSize: '0.9rem'}}>
                    Review Stock
                    <ArrowRight size={16} />
                 </button>
            </div>
             {/* Subtle decorative element */}
             <div className="position-absolute h-100 w-100 top-0 start-0" style={{
                  background: 'linear-gradient(90deg, var(--bg-card) 0%, rgba(255,255,255,0) 100%)',
                  zIndex: 0
             }}></div>
        </div>
    );
};

export default IntelligenceCard;
