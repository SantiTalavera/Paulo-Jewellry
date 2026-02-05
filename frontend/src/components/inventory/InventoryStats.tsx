import { Package, DollarSign, Crown, Hexagon } from 'lucide-react';

const InventoryStats = () => {
  const stats = [
    { 
        label: "TOTAL ITEMS", 
        value: "1,248", 
        change: "+12", 
        trendUp: true,
        icon: <Package size={18} className="text-primary opacity-75" />
    },
    { 
        label: "VALUATION", 
        value: "$4.2M", 
        change: "-5.4%", 
        trendUp: false,
        icon: <DollarSign size={18} className="text-success opacity-75" /> 
    },
    { 
        label: "GOLD (24K)", 
        value: "$2,045", 
        change: "-0.2%", 
        trendUp: false,
        icon: <Crown size={18} className="text-warning opacity-75" />
    },
    { 
        label: "SILVER", 
        value: "$24.50", 
        change: "+1.1%", 
        trendUp: true,
        icon: <Hexagon size={18} className="text-secondary opacity-75" />
    }
  ];

  return (
    <div className="row g-4 mb-5">
      {stats.map((stat, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-3">
          <div className="card stat-card h-100 p-4 d-flex flex-column justify-content-between" style={{minHeight: '140px'}}>
             <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                    {stat.icon}
                    <h6 className="fw-bold mb-0" style={{color: 'var(--text-main)', fontSize: '0.8rem', letterSpacing: '0.05em'}}>{stat.label}</h6>
                </div>
             </div>
             <div>
                <h2 className="fw-bold mb-1" style={{color: 'var(--text-main)', fontSize: '1.75rem'}}>{stat.value}</h2>
                <div className={`d-flex align-items-center gap-2 ${stat.trendUp ? 'text-success' : 'text-danger'}`}>
                    <span className="fw-medium small">{stat.change}</span>
                    <span className="text-muted small" style={{fontSize: '0.75rem'}}>from last month</span>
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryStats;
