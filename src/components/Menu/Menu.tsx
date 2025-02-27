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
import { IoMdClose } from 'react-icons/io';
// State Management
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleMenu } from '../../redux/slices/navbarSlices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

const Menu = () => {
  const location = useLocation();
  const isMenuOpen = useSelector((state: RootState) => state.navbar.isMenuOpen);
  const dispatch = useDispatch<AppDispatch>();

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
    <div
      className={`lg:flex flex-col fixed left-0 top-0 w-[15%] h-screen bg-white cursor-pointer transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0 w-[70%]' : '-translate-x-full'
      } md:translate-x-0`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-between items-center gap-2 p-4 h-[8vh]">
        <Link to="/">
          <div className="flex items-center gap-2">
            <BsFillClipboardCheckFill size={25} />
            <span className="hidden md:block text-[25px] inter-800 line-height-1 text-skin-base">
              Soar Task
            </span>
          </div>
        </Link>
        {isMenuOpen && (
          <button
            className="flex sm:hidden"
            onClick={() => dispatch(toggleMenu(false))}
          >
            <IoMdClose size={25} />
          </button>
        )}
      </div>

      <div className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => dispatch(toggleMenu(false))}
            className={`flex items-center gap-3 px-4 py-3 transition-colors
              ${
                location.pathname === item.path
                  ? 'text-skin-black border-black rounded-sm border-0 border-l-4 inset-0 transition-all duration-800'
                  : 'text-skin-not-active'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className={`text-[18px] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

//
