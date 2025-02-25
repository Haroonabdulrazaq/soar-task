import BalanceHistory from './BalanceHistory';
import Cards from './Cards';
import ExpenseStatistics from './ExpenseStatistics';
import QuickTransfer from './QuickTransfer';
import Transactions from './Transactions';
import WeeklyActivities from './WeeklyActivities';

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:ml-[15%] min-h-screen gap-6 p-6 sm:bg-skin-gray">
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <Cards />
        <Transactions />
      </div>
      <div className="flex flex-col w-full sm:flex-row gap-6 my-6">
        <div className="flex flex-col w-full sm:w-2/3">
          <h2 className="text-skin-base text-[16px] sm:text-[22px] inter-600 mb-4">
            Weekly Activity
          </h2>
          <WeeklyActivities />
        </div>
        <div className="flex flex-col w-full sm:w-1/3">
          <h2 className="text-skin-base text-[16px] sm:text-[22px] inter-600 mb-4">
            Expense Statistics
          </h2>
          <ExpenseStatistics />
        </div>
      </div>
      <div className="flex flex-col w-full sm:flex-row gap-6 mb-6 sm:mb-3">
        <div className="flex flex-col w-full sm:w-1/3">
          <h2 className="text-skin-base text-[16px] sm:text-[22px] inter-600 mb-4">
            Quick Transfer
          </h2>
          <QuickTransfer />
        </div>
        <div className="flex flex-col w-full sm:w-2/3">
          <h2 className="text-skin-base text-[16px] sm:text-[22px] inter-600 mb-4">
            Balance History
          </h2>
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
