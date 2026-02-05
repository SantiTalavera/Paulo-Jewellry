import Header from '../components/common/Header';
import StatsRow from '../components/dashboard/StatsRow';
import ActiveRepairs from '../components/dashboard/ActiveRepairs';
import RecentSales from '../components/dashboard/RecentSales';

const Dashboard = () => {
  return (
    <div className="container-fluid pb-5">
      <Header 
        title="Overview" 
        subtitle="Welcome back. Here is your store activity." 
      />
      
      <StatsRow />

      <div className="row g-4 mb-4">
        <div className="col-lg-8">
            <ActiveRepairs />
        </div>
        <div className="col-lg-4">
            <RecentSales />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
