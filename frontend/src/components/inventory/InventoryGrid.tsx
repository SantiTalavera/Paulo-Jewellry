import { Plus } from 'lucide-react';

const InventoryGrid = () => {
  const products = [
    {
      name: "Diamond Solitaire",
      subtitle: "18k Gold • 1.2ct Diamond",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1605100804763-ebea240f2b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tag: "NEW ARRIVAL",
      tagColor: "bg-warning text-white",
      featured: true
    },
    {
      name: "Emerald Pendant",
      subtitle: "18k Gold • 2.5ct Emerald",
      price: "$2,850",
      image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tag: "COLLECTION",
      tagColor: "bg-success text-white",
      featured: true
    },
    {
      name: "Solid Gold Bangle",
      subtitle: "22k Gold • Pure",
      price: "$1,100",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sapphire Studs",
      subtitle: "Platinum • 1.5ct Sapphire",
      price: "$3,400",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Pearl Drop Earrings",
        subtitle: "Silver 925 • Natural Pearl",
        price: "$450",
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Ruby Vintage Brooch",
        subtitle: "14k Gold • 3.0ct Ruby",
        price: "$5,600",
        image: "https://images.unsplash.com/photo-1603974372039-adc019f6bb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      }
  ];

  return (
    <div className="row g-4">
      {products.map((product, idx) => (
        <div key={idx} className={product.featured ? "col-12 col-md-6" : "col-12 col-md-6 col-lg-4"}>
          <div className="card stat-card h-100 border-0 overflow-hidden" style={{ transition: 'all 0.3s ease' }}>
            <div className="position-relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-100 object-fit-cover"
                    style={{height: product.featured ? '280px' : '200px'}}
                />
                {product.tag && (
                    <span 
                        className={`position-absolute top-0 start-50 translate-middle-x mt-3 badge rounded-pill fw-bold ${product.tagColor} shadow-sm`} 
                        style={{letterSpacing: '1px', fontSize: '0.7rem', padding: '0.5em 1em'}}
                    >
                        {product.tag}
                    </span>
                )}
            </div>
            <div className="card-body text-center p-4">
                <h6 className="fw-bold mb-1 text-main" style={{fontSize: '1rem'}}>{product.name}</h6>
                <p className="text-muted small mb-3">{product.subtitle}</p>
                <div className="d-flex justify-content-between align-items-center px-2 pt-2 border-top" style={{borderColor: 'var(--border-color)'}}>
                     <span className="fw-bold fs-5 text-main">{product.price}</span>
                     <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center hover-bg-light-darker transition-all" style={{width: '36px', height: '36px'}}>
                        <Plus size={18} className="text-dark" />
                     </button>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryGrid;
