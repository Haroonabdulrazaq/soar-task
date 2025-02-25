import Cards from './Cards';
import ExpenseStatistics from './ExpenseStatistics';
import Transactions from './Transactions';
import WeeklyActivities from './WeeklyActivities';

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:ml-[15%] min-h-screen gap-6 p-6 sm:bg-skin-gray">
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <Cards />
        <Transactions />
      </div>
      <div className="flex flex-col w-full sm:flex-row gap-6">
        <div className="flex flex-col w-full sm:w-2/3">
          <h2 className="text-skin-base text-xl font-semibold inter-600">
            Weekly Activity
          </h2>
          <WeeklyActivities />
        </div>
        <div className="flex flex-col w-full sm:w-1/3">
          <h2 className="text-skin-base text-xl font-semibold inter-600">
            Expense Statistics
          </h2>
          <ExpenseStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
