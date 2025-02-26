import React from 'react';
import { transactionIcons } from '../../common/utils/iconMappings';
// State
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../../redux/slices/transactionSlices';
import { RootState, AppDispatch } from '../../redux/store';
import { useEffect } from 'react';

const Transactions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    transactions,
    error: transactionError,
    loading: transactionLoading,
  } = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (transactionLoading) return <p>Loading transactions...</p>;
  if (transactionError) return <p>Error: {transactionError}</p>;

  return (
    <div className="w-full sm:w-1/3">
      <h2 className="text-skin-base text-xl font-semibold inter-600">
        Recent Transaction
      </h2>
      <div className="bg-white mt-6 rounded-2xl p-4 max-h-[calc(45vh-6rem)] overflow-y-auto no-scrollbar">
        {transactions &&
          transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: transaction.bgColor }}
                >
                  {transactionIcons[transaction.title] &&
                    React.createElement(transactionIcons[transaction.title], {
                      color: transaction.iconColor,
                      size: 24,
                    })}
                </div>
                <div>
                  <p className="text-skin-base font-medium">
                    {transaction.title}
                  </p>
                  <p className="text-[15px] text-[#718EBF]">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <p
                className={`font-semibold ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}
              >
                {transaction.amount > 0 ? '+$' : '-$'}
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Transactions;
