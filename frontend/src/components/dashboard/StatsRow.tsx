import { Star, Plus, ArrowRight, Coins, Gem, BarChart3, Receipt } from 'lucide-react';

const StatsRow = () => {
  const cards = [
    {
      title: "Gold Rate (24k)",
      description: "Live market pricing for 24k gold",
      value: "$2,045.50",
      trend: "+1.2%",
      trendUp: true,
      metric: "180.4k",
      icon: <Coins size={18} className="text-warning opacity-75" />
    },
    {
      title: "Silver Rate",
      description: "Live market pricing for sterling silver",
      value: "$23.10",
      trend: "-0.5%",
      trendUp: false,
      metric: "52.1k",
      icon: <Gem size={18} className="text-secondary opacity-75" />
    },
    {
      title: "Inventory Value",
      description: "Total estimated value of current stock",
      value: "$1.25M",
      trend: "+5.0%",
      trendUp: true,
      metric: "39.9k",
      icon: <BarChart3 size={18} className="text-primary opacity-75" />
    },
    {
      title: "Today's Sales",
      description: "Real-time tracking of today's revenue",
      value: "$15,400",
      trend: "+12%",
      trendUp: true,
      metric: "12.5k",
      icon: <Receipt size={18} className="text-success opacity-75" />
    }
  ];

  return (
    <div className="row g-4 mb-5">
      {cards.map((card, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index}>
          <div className="card stat-card h-100 p-4 d-flex flex-column justify-content-between" style={{minHeight: '180px', cursor: 'pointer'}}>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center gap-2">
                  {card.icon}
                  <h6 className="fw-bold mb-0" style={{color: '#334155', fontSize: '0.95rem'}}>{card.title}</h6>
                </div>
              </div>
              <p className="text-muted small mb-3">{card.description}</p>
            </div>
            
            <div className="d-flex justify-content-between align-items-end">
              <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.85rem'}}>
                <div className="d-flex align-items-center gap-1">
                  <Star size={14} />
                  <span>{card.metric}</span>
                </div>
                <span className={card.trendUp ? 'text-success' : 'text-danger'} style={{fontWeight: '500'}}>
                  {card.trend}
                </span>
              </div>
              
              <button 
                className="btn btn-action-round" 
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Showing details for ${card.title}`);
                }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* "Add Project" Card at the end */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card stat-card h-100 p-4 border-dashed d-flex flex-column justify-content-center align-items-center" 
             style={{
               backgroundColor: 'var(--bg-light)', 
               borderStyle: 'dashed', 
               borderWidth: '2px',
               minHeight: '180px', 
               cursor: 'pointer', 
               borderColor: 'var(--card-hover-border)'
             }}>
          <div className="mb-2 text-muted">
            <Plus size={24} />
          </div>
          <span className="fw-bold text-muted" style={{fontSize: '0.9rem'}}>Add Insight</span>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
