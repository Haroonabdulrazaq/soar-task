import Cards from './Cards';
import Transactions from './Transactions';

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:ml-[15%] min-h-screen gap-6 p-6 bg-skin-gray">
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <Cards />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
