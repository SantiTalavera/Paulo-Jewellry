const InventoryStats = () => {
  const stats = [
    { label: "TOTAL ITEMS", value: "1,248", change: "+12", changeColor: "text-success", highContrast: false },
    { label: "VALUATION", value: "$4.2M", change: "-5.4%", changeColor: "text-success", highContrast: false }, // Image shows green despite negative? Or simply shows change. Let's start with green.
    { label: "GOLD (24K)", value: "$2,045", change: "-0.2%", changeColor: "text-danger", highContrast: false },
    { label: "SILVER", value: "$24.50", change: "+1.1%", changeColor: "text-success", highContrast: false }
  ];

  return (
    <div className="row g-3 mb-5">
      {stats.map((stat, idx) => (
        <div key={idx} className="col-6 col-lg-3">
          <div className="bg-dark text-white p-4 rounded-4 h-100" style={{backgroundColor: '#1a1a1a'}}>
            <small className="text-secondary fw-bold" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>{stat.label}</small>
            <div className="d-flex align-items-baseline gap-2 mt-2">
              <h2 className="mb-0 fw-bold">{stat.value}</h2>
              <small className={`${stat.changeColor} fw-medium`}>{stat.change}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryStats;
