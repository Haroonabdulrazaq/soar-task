import {
  PiCards,
  PiPaypalLogoThin,
  PiCurrencyCircleDollarLight,
} from 'react-icons/pi';
// import { SiMastercard } from 'react-icons/si';
import masterCardBlack from '../../assets/images/mastercard-black.png';
import masterCardWhite from '../../assets/images/mastercard-white.png';
import { Card, Transaction } from '../../common/types/index.types';
import ChipCardBlack from '../../assets/images/card-chip-black.png';
import ChipCardWhite from '../../assets/images/card-chip-white.png';
// Card data
const cards: Card[] = [
  {
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    color: 'text-white',
    cardChip: ChipCardWhite,
    masterCardLogo: masterCardWhite,
    bgTopColor: 'bg-gradient-bottom-lavender',
    bgBottomColor: 'bg-gradient-right-lavender',
  },
  {
    balance: 3400,
    cardHolder: 'Sarah Miller',
    validThru: '09/24',
    cardNumber: '3778 **** **** 5678',
    color: 'text-black',
    cardChip: ChipCardBlack,
    masterCardLogo: masterCardBlack,
    bgTopColor: 'bg-gradient-bottom-dirty-white',
    bgBottomColor: 'bg-gradient-right-dirty-white',
  },
  {
    balance: 8900,
    cardHolder: 'John Smith',
    validThru: '03/23',
    cardNumber: '3778 **** **** 9012',
    color: 'text-white',
    cardChip: ChipCardWhite,
    masterCardLogo: masterCardWhite,
    bgTopColor: 'bg-gradient-bottom-lavender',
    bgBottomColor: 'bg-gradient-right-lavender',
  },
  {
    balance: 8900,
    cardHolder: 'John Smith',
    validThru: '03/23',
    cardNumber: '3778 **** **** 9012',
    color: 'text-black',
    cardChip: ChipCardBlack,
    masterCardLogo: masterCardBlack,
    bgTopColor: 'bg-gradient-bottom-dirty-white',
    bgBottomColor: 'bg-gradient-right-dirty-white',
  },
];

// Transaction data
const transactions: Transaction[] = [
  {
    icon: PiCards,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    bgColor: '#FFF5D9',
    iconColor: '#FFBB38',
  },
  {
    icon: PiPaypalLogoThin,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    bgColor: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    icon: PiCurrencyCircleDollarLight,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    bgColor: '#DCFAF8',
    iconColor: '#16DBCC',
  },
  {
    icon: PiCards,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    bgColor: '#FFF5D9',
    iconColor: '#FFBB38',
  },
  {
    icon: PiPaypalLogoThin,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    bgColor: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    icon: PiCurrencyCircleDollarLight,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    bgColor: '#DCFAF8',
    iconColor: '#16DBCC',
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:ml-[15%] min-h-screen gap-6 p-6 bg-skin-gray">
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <div className="w-full sm:w-2/3 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-skin-base text-xl font-semibold inter-600">
              My Cards
            </h2>
            <a href="#" className="text-skin-sharp inter-500">
              See All
            </a>
          </div>

          {/* Cards Container */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`min-w-[320px] min-h-[200px] ${card.color} flex flex-col justify-between rounded-2xl`}
              >
                {/* Top section */}
                <div className={`p-6 ${card.bgTopColor} rounded-t-2xl`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="  text-11px sm:text-[12px] opacity-80">
                        Balance
                      </p>
                      <p className="text-[16px] sm:text-[20px] font-semibold">
                        ${card.balance.toLocaleString()}
                      </p>
                    </div>
                    <img
                      src={card.cardChip}
                      alt="Card Chip"
                      className="h-8"
                      aria-label="Card Chip"
                    />
                  </div>

                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <p className="font-[400] text-[10px] sm:text-[12px] opacity-80 font-lato">
                        CARD HOLDER
                      </p>
                      <p className="font-medium text-[13px] sm:text-[15px] font-semibold">
                        {card.cardHolder}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80 font-normal text-[10px] sm:text-[12px]">
                        VALID THRU
                      </p>
                      <p className="font-medium text-[13px] sm:text-[15px] font-semibold">
                        {card.validThru}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom section */}
                <div
                  className={`p-6 rounded-b-2xl ${card.bgBottomColor} border-skin-gray`}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{card.cardNumber}</p>
                    <img
                      src={card.masterCardLogo}
                      alt="Mastercard Logo"
                      className="h-8"
                      aria-label="Mastercard Logo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <h2 className="text-skin-base text-xl font-semibold inter-600">
            Recent Transaction
          </h2>
          <div className="bg-white mt-6 rounded-2xl p-4 max-h-[calc(50vh-6rem)] overflow-y-auto no-scrollbar">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: transaction.bgColor }}
                  >
                    <transaction.icon
                      size={24}
                      style={{ color: transaction.iconColor }}
                    />
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
                  {transaction.amount > 0 ? '+$' : '$'}
                  {transaction.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
