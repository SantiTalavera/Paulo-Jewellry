import { useState, useEffect } from 'react';
import { MoreHorizontal, ExternalLink, Clock, Edit2, CheckCircle2, Eye } from 'lucide-react';

const ActiveRepairs = () => {
  const [menuConfig, setMenuConfig] = useState<{id: string, top: number, left: number} | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuConfig) setMenuConfig(null);
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [menuConfig]);

  const repairs = [
    {
      id: "#RP-4921",
      customer: "Jane Doe",
      initials: "JD",
      item: "Diamond Ring Resize",
      status: "In Progress",
      statusVariant: "primary",
      dueDate: "Oct 24, 2026"
    },
    {
      id: "#RP-4922",
      customer: "Michael Smith",
      initials: "MS",
      item: "Gold Chain Soldering",
      status: "Polishing",
      statusVariant: "warning",
      dueDate: "Oct 25, 2026"
    },
    {
      id: "#RP-4925",
      customer: "Elena L.",
      initials: "EL",
      item: "Stone Setting (Ruby)",
      status: "Received",
      statusVariant: "secondary",
      dueDate: "Oct 28, 2026"
    }
  ];

  const handleAction = (action: string, id: string) => {
    alert(`${action} for repair ${id}`);
    setMenuConfig(null);
  };

  const handleToggleMenu = (e: React.MouseEvent, id: string) => {
    if (menuConfig?.id === id) {
      setMenuConfig(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setMenuConfig({
        id,
        top: rect.bottom + 5, // 5px gap
        left: rect.left - 140 // Offset to the left
      });
    }
  };

  return (
    <div className="card stat-card h-100 p-0">
      <div className="card-header bg-transparent border-bottom py-3 px-4 d-flex justify-content-between align-items-center rounded-top-4">
        <h5 className="fw-bold mb-0" style={{fontSize: '1.25rem'}}>Active Workshop Repairs</h5>
        <button 
          className="btn btn-link text-decoration-none fw-semibold p-0 d-flex align-items-center gap-1"
          style={{fontSize: '0.875rem'}}
          onClick={() => handleAction('View All', 'all')}
        >
          View All <ExternalLink size={14} />
        </button>
      </div>
      <div className="table-responsive" style={{overflow: 'visible'}}>
        <table className="table table-hover align-middle mb-0">
          <thead style={{backgroundColor: 'var(--bg-light)'}}>
            <tr>
              <th className="px-4 py-3 text-muted fw-semibold small" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Job ID</th>
              <th className="py-3 text-muted fw-semibold small" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Customer</th>
              <th className="py-3 text-muted fw-semibold small" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Item Details</th>
              <th className="py-3 text-muted fw-semibold small" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Status</th>
              <th className="py-3 text-muted fw-semibold small" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Due Date</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair, idx) => (
              <tr key={idx} className="border-bottom" style={{transition: 'all 0.2s'}}>
                <td className="px-4 text-muted small" style={{fontSize: '0.85rem'}}>{repair.id}</td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold" style={{width: '32px', height: '32px', fontSize: '12px', border: '1px solid var(--border-color)'}}>
                      {repair.initials}
                    </div>
                    <span className="fw-medium text-main" style={{fontSize: '0.9rem'}}>{repair.customer}</span>
                  </div>
                </td>
                <td className="text-secondary" style={{fontSize: '0.9rem'}}>{repair.item}</td>
                <td>
                  <span 
                    className={`badge border border-${repair.statusVariant} text-${repair.statusVariant} bg-${repair.statusVariant} bg-opacity-10 rounded-pill px-3 py-1 fw-normal`}
                    style={{fontSize: '0.75rem'}}
                  >
                    {repair.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Clock size={14} className="text-muted" />
                    <div className="d-flex flex-column">
                      <span className="fw-medium text-main" style={{fontSize: '0.85rem'}}>{repair.dueDate.split(',')[0]}</span>
                      <span className="text-muted" style={{fontSize: '11px'}}>{repair.dueDate.split(',')[1]}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 text-end">
                   <div className="p-2 rounded-circle hover-bg-light d-inline-flex align-items-center justify-content-center cursor-pointer" 
                        style={{width: '32px', height: '32px', transition: 'all 0.2s'}}
                        onClick={(e) => handleToggleMenu(e, repair.id)}>
                    <MoreHorizontal size={18} className="text-secondary opacity-75" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {menuConfig && (
        <>
          <div className="position-fixed top-0 start-0 w-100 h-100" style={{zIndex: 1040}} onClick={() => setMenuConfig(null)}></div>
          <div className="position-fixed bg-card border rounded-3 shadow py-2 px-1 text-start" 
               style={{
                 zIndex: 1050, 
                 minWidth: '160px', 
                 top: `${menuConfig.top}px`, 
                 left: `${menuConfig.left}px`,
                 backgroundColor: 'var(--bg-card)',
                 borderColor: 'var(--border-color)'
               }}>
            <button className="btn btn-link w-100 text-start text-decoration-none py-2 px-3 d-flex align-items-center gap-2 hover-bg-light" style={{fontSize: '0.85rem', color: 'var(--text-main)'}} onClick={() => handleAction('Edit', menuConfig.id)}>
              <Edit2 size={14} className="text-primary" /> Edit Repair
            </button>
            <button className="btn btn-link w-100 text-start text-decoration-none py-2 px-3 d-flex align-items-center gap-2 hover-bg-light" style={{fontSize: '0.85rem', color: 'var(--text-main)'}} onClick={() => handleAction('Status', menuConfig.id)}>
              <CheckCircle2 size={14} className="text-success" /> Update Status
            </button>
            <div className="border-bottom my-1" style={{borderColor: 'var(--border-color)'}}></div>
            <button className="btn btn-link w-100 text-start text-decoration-none py-2 px-3 d-flex align-items-center gap-2 hover-bg-light" style={{fontSize: '0.85rem', color: 'var(--text-main)'}} onClick={() => handleAction('Details', menuConfig.id)}>
              <Eye size={14} className="text-secondary" /> View Details
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActiveRepairs;
