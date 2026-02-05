import { Sparkles } from 'lucide-react';

const IntelligenceCard = () => {
    return (
        <div className="card border-0 shadow-sm bg-white overflow-hidden position-relative">
            <div className="card-body p-4 d-flex align-items-start gap-4 position-relative z-1">
                 <div className="p-3 bg-primary-subtle rounded-3 text-primary">
                    <Sparkles size={24} />
                 </div>
                 <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2">Inventory Intelligence</h5>
                    <p className="text-secondary mb-0" style={{maxWidth: '700px'}}>
                        Based on current sales trends, your stock of <span className="fw-bold text-dark">18k Gold Chains</span> is predicted to run low by next Tuesday. 
                        Consider restocking soon to avoid lost sales.
                    </p>
                 </div>
                 <button className="btn btn-black bg-black text-white rounded-pill px-4 py-2 d-flex align-items-center gap-2">
                    Review Stock
                    {/* <ArrowRight size={16} /> */}
                 </button>
            </div>
             {/* Decorative background element mimicking the screenshot */}
             <div className="position-absolute bottom-0 end-0 p-5" style={{
                 background: 'radial-gradient(circle, rgba(13,110,253,0.1) 0%, rgba(255,255,255,0) 70%)', 
                 width: '300px', 
                 height: '300px',
                 transform: 'translate(30%, 30%)'
            }}></div>
        </div>
    );
};

export default IntelligenceCard;
