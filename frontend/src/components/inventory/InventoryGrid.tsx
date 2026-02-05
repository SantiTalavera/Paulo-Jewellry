import { Plus } from 'lucide-react';

const InventoryGrid = () => {
  const products = [
    {
      name: "Diamond Solitaire",
      subtitle: "18k Gold • 1.2ct Diamond",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1605100804763-ebea240f2b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tag: "NEW ARRIVAL",
      tagColor: "text-warning",
      featured: true,
      dark: true
    },
    {
      name: "Emerald Pendant",
      subtitle: "18k Gold • 2.5ct Emerald",
      price: "$2,850",
      image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tag: "COLLECTION",
      tagColor: "text-success",
      featured: true,
      dark: true
    },
    {
      name: "Solid Gold Bangle",
      subtitle: "22k Gold • Pure",
      price: "$1,100",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      dark: true
    },
    {
      name: "Sapphire Studs",
      subtitle: "Platinum • 1.5ct Sapphire",
      price: "$3,400",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      dark: true
    },
    {
        name: "Pearl Drop Earrings",
        subtitle: "Silver 925 • Natural Pearl",
        price: "$450",
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        dark: true
      },
      {
        name: "Ruby Vintage Brooch",
        subtitle: "14k Gold • 3.0ct Ruby",
        price: "$5,600",
        image: "https://images.unsplash.com/photo-1603974372039-adc019f6bb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        dark: true
      }
  ];

  return (
    <div className="row g-4">
      {products.map((product, idx) => (
        <div key={idx} className={product.featured ? "col-12 col-md-6" : "col-12 col-md-6 col-lg-4"}>
          <div className="card border-0 bg-dark text-white overflow-hidden h-100" style={{backgroundColor: '#1a1a1a'}}>
            <div className="position-relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-100 object-fit-cover"
                    style={{height: product.featured ? '300px' : '200px'}}
                />
                {product.tag && (
                    <span className={`position-absolute top-0 start-50 translate-middle-x mt-3 small fw-bold ${product.tagColor}`} style={{letterSpacing: '2px'}}>
                        {product.tag}
                    </span>
                )}
            </div>
            <div className="card-body text-center p-4">
                <h5 className="fw-bold mb-1">{product.name}</h5>
                <p className="text-secondary small mb-4">{product.subtitle}</p>
                <div className="d-flex justify-content-between align-items-center px-2">
                     <span className="fw-bold fs-5">{product.price}</span>
                     <button className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', borderColor: '#333'}}>
                        <Plus size={16} />
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
