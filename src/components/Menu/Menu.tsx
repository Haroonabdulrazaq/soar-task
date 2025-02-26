import { GoHomeFill } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { TbSettingsFilled } from 'react-icons/tb';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { BiTransfer } from 'react-icons/bi';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';
import { MdStars } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { BsFillClipboardCheckFill } from 'react-icons/bs';

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: <GoHomeFill />, label: 'Dashboard' },
    { path: '/transactions', icon: <BiTransfer />, label: 'Transactions' },
    { path: '/accounts', icon: <FaUser />, label: 'Accounts' },
    {
      path: '/investments',
      icon: <RiMoneyDollarBoxFill />,
      label: 'Investments',
    },
    {
      path: '/credit-cards',
      icon: <AiFillCreditCard />,
      label: 'Credit Cards',
    },
    { path: '/loans', icon: <FaHandHoldingUsd />, label: 'Loans' },
    { path: '/services', icon: <HiWrenchScrewdriver />, label: 'Services' },
    { path: '/privileges', icon: <MdStars />, label: 'My Privileges' },
    { path: '/setting', icon: <TbSettingsFilled />, label: 'Setting' },
  ];

  return (
    <div className="hidden md:flex flex-col fixed left-0 top-0 w-[15%] h-screen bg-white cursor-pointer">
      <div className="flex items-center gap-2 p-4 h-[8vh]">
        <BsFillClipboardCheckFill size={25} />
        <span className="hidden sm:block text-[25px] inter-800 line-height-1 text-skin-base">
          Soar Task
        </span>
      </div>

      <div className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 transition-colors
              ${
                location.pathname === item.path
                  ? 'text-skin-black border-black rounded-sm border-0 border-l-4 inset-0 transition-all duration-800'
                  : 'text-skin-not-active'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[18px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

//
