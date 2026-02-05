import { useState, useEffect } from 'react';
import { Star, Plus, ArrowRight, Coins, Gem, BarChart3, Receipt, Loader2 } from 'lucide-react';

const StatsRow = () => {
  const [prices, setPrices] = useState({ gold: null, silver: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [goldRes, silverRes] = await Promise.all([
          fetch('https://api.gold-api.com/price/XAU'),
          fetch('https://api.gold-api.com/price/XAG')
        ]);
        
        const goldData = await goldRes.json();
        const silverData = await silverRes.json();

        setPrices({
          gold: goldData.price,
          silver: silverData.price
        });
      } catch (error) {
        console.error("Error fetching metal prices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number | null, fallback: string) => {
    if (price === null) return fallback;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const cards = [
    {
      title: "Gold Rate (24k)",
      description: "Live market pricing for 24k gold",
      value: prices.gold !== null ? formatPrice(prices.gold, "") : (loading ? "---" : "$0.00"),
      trend: loading && prices.gold === null ? "" : "+1.2%",
      trendUp: true,
      metric: loading && prices.gold === null ? "" : "180.4k",
      icon: <Coins size={18} className="text-warning opacity-75" />
    },
    {
      title: "Silver Rate",
      description: "Live market pricing for sterling silver",
      value: prices.silver !== null ? formatPrice(prices.silver, "") : (loading ? "---" : "$0.00"),
      trend: loading && prices.silver === null ? "" : "-0.5%",
      trendUp: false,
      metric: loading && prices.silver === null ? "" : "52.1k",
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
                  <h6 className="fw-bold mb-0" style={{color: 'var(--text-main)', fontSize: '0.95rem'}}>{card.title}</h6>
                </div>
                {loading && (index < 2) && <Loader2 size={14} className="animate-spin text-muted" />}
              </div>
              <p className="text-muted small mb-3">{card.description}</p>
            </div>
            
            <div className="d-flex justify-content-between align-items-end">
              <div>
                <div className="fw-bold fs-4 mb-1" style={{color: 'var(--text-main)'}}>{card.value}</div>
                <div className="d-flex align-items-center gap-3 text-muted" style={{fontSize: '0.85rem'}}>
                  <div className="d-flex align-items-center gap-1">
                    <Star size={14} />
                    <span>{card.metric}</span>
                  </div>
                  <span className={card.trendUp ? 'text-success' : 'text-danger'} style={{fontWeight: '500'}}>
                    {card.trend}
                  </span>
                </div>
              </div>
              
              <button 
                className="btn p-0 border-0 shadow-none text-muted hover-text-main transition-all" 
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Showing details for ${card.title}`);
                }}
              >
                <ArrowRight size={22} />
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
