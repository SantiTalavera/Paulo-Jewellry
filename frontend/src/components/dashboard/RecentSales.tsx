
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

    return (
        <div className="card border-0 shadow-sm h-100">
             <div className="card-header bg-white border-0 py-4 px-4">
                <h5 className="fw-bold mb-0">Recent Sales</h5>
            </div>
            <div className="card-body px-4 pt-0">
                <div className="d-flex flex-column gap-4">
                    {sales.map((sale, idx) => (
                        <div key={idx} className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <img 
                                    src={sale.image} 
                                    alt={sale.item} 
                                    className="rounded-3 object-fit-cover" 
                                    width="50" 
                                    height="50"
                                />
                                <div>
                                    <h6 className="mb-0 fw-semibold text-truncate" style={{maxWidth: '140px'}}>{sale.item}</h6>
                                    <small className="text-muted">{sale.customer}</small>
                                </div>
                            </div>
                            <div className="text-end">
                                <div className="fw-bold">{sale.price}</div>
                                <small className="text-muted" style={{fontSize: '11px'}}>{sale.time}</small>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-light w-100 text-primary fw-medium mt-4 py-2">
                    View Sales History
                </button>
            </div>
        </div>
    );
};

export default RecentSales;
