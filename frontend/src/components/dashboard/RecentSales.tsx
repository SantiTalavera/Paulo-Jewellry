import { History, ArrowUpRight } from 'lucide-react';

const RecentSales = () => {
    const sales = [
        {
            item: "18k Gold Necklace",
            customer: "Sarah M.",
            price: "$1,250",
            time: "2m ago",
            image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
        },
        {
            item: "Solitaire Ring (Silver)",
            customer: "David K.",
            price: "$450",
            time: "1h ago",
            image: "https://images.unsplash.com/photo-1605100804763-ebea240f2b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
        },
        {
            item: "Pearl Earrings Set",
            customer: "Emily R.",
            price: "$890",
            time: "3h ago",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
        }
    ];

    const handleViewHistory = () => {
        alert("Navigating to Sales History...");
    };

    return (
        <div className="card stat-card h-100 p-0">
             <div className="card-header bg-transparent border-bottom py-3 px-4 rounded-top-4">
                <h5 className="fw-bold mb-0" style={{fontSize: '1.25rem'}}>Recent Sales</h5>
            </div>
            <div className="card-body px-4 pt-4">
                <div className="d-flex flex-column gap-4">
                    {sales.map((sale, idx) => (
                        <div key={idx} className="d-flex align-items-center gap-3 p-2 rounded-3 hover-bg-light" style={{transition: 'all 0.2s', cursor: 'pointer'}}>
                            <div className="flex-shrink-0 position-relative">
                                <div className="rounded-circle border d-flex align-items-center justify-content-center bg-light overflow-hidden" style={{width: '44px', height: '44px', borderColor: 'var(--border-color) !important'}}>
                                    <img 
                                        src={sale.image} 
                                        alt="" 
                                        className="w-100 h-100 object-fit-cover" 
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).parentElement!.classList.add('bg-primary-subtle');
                                        }}
                                    />
                                    <span className="position-absolute small fw-bold text-primary" style={{zIndex: -1}}>{sale.customer.charAt(0)}</span>
                                </div>
                                <div className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle" style={{width: '10px', height: '10px', zIndex: 1}}></div>
                            </div>
                            
                            <div className="flex-grow-1 min-width-0">
                                <h6 className="mb-0 fw-semibold text-truncate text-main" style={{fontSize: '0.95rem'}}>{sale.item}</h6>
                                <small className="text-muted" style={{fontSize: '0.8rem'}}>{sale.customer}</small>
                            </div>

                            <div className="flex-shrink-0 text-end ms-2">
                                <div className="fw-bold" style={{fontSize: '0.95rem'}}>{sale.price}</div>
                                <div className="text-muted" style={{fontSize: '11px'}}>{sale.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button 
                  className="btn btn-outline-light text-primary w-100 fw-semibold mt-4 py-2 border d-flex align-items-center justify-content-center gap-2"
                  style={{fontSize: '0.9rem', borderRadius: '10px', borderColor: 'var(--border-color) !important'}}
                  onClick={handleViewHistory}
                >
                    <History size={16} />
                    View Sales History
                    <ArrowUpRight size={14} className="opacity-50" />
                </button>
            </div>
        </div>
    );
};

export default RecentSales;
