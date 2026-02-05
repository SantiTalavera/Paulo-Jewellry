import { MoreHorizontal } from 'lucide-react';

const ActiveRepairs = () => {
  const repairs = [
    {
      id: "#RP-4921",
      customer: "Jane Doe",
      initials: "JD",
      item: "Diamond Ring Resize",
      status: "In Progress",
      statusColor: "bg-primary-subtle text-primary",
      dueDate: "Oct 24, 2026"
    },
    {
      id: "#RP-4922",
      customer: "Michael Smith",
      initials: "MS",
      item: "Gold Chain Soldering",
      status: "Polishing",
      statusColor: "bg-warning-subtle text-warning",
      dueDate: "Oct 25, 2026"
    },
    {
      id: "#RP-4925",
      customer: "Elena L.",
      initials: "EL",
      item: "Stone Setting (Ruby)",
      status: "Received",
      statusColor: "bg-secondary-subtle text-secondary",
      dueDate: "Oct 28, 2026"
    }
  ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-header bg-white border-0 py-4 px-4 d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Active Workshop Repairs</h5>
        <button className="btn btn-link text-decoration-none fw-semibold">View All</button>
      </div>
      <div className="table-responsive">
        <table className="table align-middle table-hover mb-0">
          <thead className="bg-light">
            <tr>
              <th className="px-4 py-3 text-muted fw-semibold small border-0">Job ID</th>
              <th className="py-3 text-muted fw-semibold small border-0">Customer</th>
              <th className="py-3 text-muted fw-semibold small border-0">Item Details</th>
              <th className="py-3 text-muted fw-semibold small border-0">Status</th>
              <th className="py-3 text-muted fw-semibold small border-0">Due Date</th>
              <th className="px-4 py-3 border-0"></th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair, idx) => (
              <tr key={idx}>
                <td className="px-4 text-muted small">{repair.id}</td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold" style={{width: '36px', height: '36px', fontSize: '13px'}}>
                      {repair.initials}
                    </div>
                    <span className="fw-medium">{repair.customer}</span>
                  </div>
                </td>
                <td className="text-secondary">{repair.item}</td>
                <td>
                  <span className={`badge ${repair.statusColor} rounded-pill px-3 py-2 fw-normal`}>
                    {repair.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column">
                    <span className="small fw-medium">{repair.dueDate.split(',')[0]}</span>
                    <span className="text-muted small" style={{fontSize: '11px'}}>{repair.dueDate.split(',')[1]}</span>
                  </div>
                </td>
                <td className="px-4 text-end">
                   <MoreHorizontal size={18} className="text-muted cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveRepairs;
