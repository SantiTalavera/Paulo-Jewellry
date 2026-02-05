import { ArrowUpRight, ArrowDownRight, DollarSign, Droplet, Archive, CreditCard } from 'lucide-react';

const StatsRow = () => {
  const cards = [
    {
      title: "Gold Rate (24k)",
      value: "$2,045.50",
      trend: "+1.2%",
      trendUp: true,
      subtext: "vs yesterday",
      icon: <DollarSign size={20} className="text-warning" />,
      bgIcon: "bg-warning-subtle"
    },
    {
      title: "Silver Rate",
      value: "$23.10",
      trend: "0.5%",
      trendUp: false,
      subtext: "vs yesterday",
      icon: <Droplet size={20} className="text-secondary" />,
      bgIcon: "bg-secondary-subtle"
    },
    {
      title: "Inventory Value",
      value: "$1.25M",
      trend: "+5.0%",
      trendUp: true,
      subtext: "mo/mo",
      icon: <Archive size={20} className="text-primary" />,
      bgIcon: "bg-primary-subtle"
    },
    {
      title: "Today's Sales",
      value: "$15,400",
      trend: "+12%",
      trendUp: true,
      subtext: "vs avg",
      icon: <CreditCard size={20} className="text-success" />,
      bgIcon: "bg-success-subtle"
    }
  ];

  return (
    <div className="row g-4 mb-5">
      {cards.map((card, index) => (
        <div className="col-12 col-md-6 col-xl-3" key={index}>
          <div className="card border-0 shadow-sm h-100 p-3 stat-card">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="text-muted fw-medium">{card.title}</span>
              <div className={`p-2 rounded-circle ${card.bgIcon}`}>
                {card.icon}
              </div>
            </div>
            <h2 className="fw-bold mb-2">{card.value}</h2>
            <div className="d-flex align-items-center gap-2">
              <span className={`badge ${card.trendUp ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} rounded-pill d-flex align-items-center gap-1 px-2`}>
                {card.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {card.trend}
              </span>
              <span className="text-muted small">{card.subtext}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
