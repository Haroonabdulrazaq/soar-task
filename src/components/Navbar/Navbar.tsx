import { IoSettingsOutline } from 'react-icons/io5';
import { LuBellDot } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearchOutline } from 'react-icons/io5';
import christinaThumbnail from '../../assets/images/christina-thumbnail.png';
import { Link, useLocation } from 'react-router-dom';
// State Management
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/slices/navbarSlices';
import { AppDispatch } from '../../redux/store';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation();
  const pageName = location.pathname.split('/')[1];
  const pageNameCapitalized =
    pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="flex flex-col sm:flex-row h-[15vh] sm:h-[8vh] bg-white shadow-sm w-full sm:w-[85%] ml-auto px-4">
      <div className="flex items-center justify-between px-4 py-2 sm:py-0 w-full">
        <div className="flex items-center gap-3 sm:flex-initial flex-1">
          <button
            className="sm:hidden btn btn-ghost btn-sm p-0"
            onClick={() => dispatch(toggleMenu(true))}
          >
            <GiHamburgerMenu className="text-gray-600" size={20} />
          </button>
          <span className="font-medium text-skin-base inter-500 text-[20px] sm:text-left sm:text-[28px] text-center flex-1 sm:flex-initial">
            {pageNameCapitalized == '' ? 'Overview' : pageNameCapitalized}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for something"
              className="input w-[250px] pl-10 h-9 rounded-full bg-skin-gray hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Search input"
            />
          </div>

          <Link to="/setting">
            <button className="btn btn-circle btn-sm bg-skin-gray">
              <IoSettingsOutline
                size={20}
                className="text-skin-muted"
                title="Settings"
              />
            </button>
          </Link>

          <button className="btn btn-circle btn-sm bg-skin-gray">
            <LuBellDot
              size={20}
              className="text-skin-sharp"
              title="Notifications"
            />
          </button>

          <div className="avatar cursor-pointer">
            <div className="w-8 rounded-full">
              <img
                src={christinaThumbnail}
                alt="Profile"
                title="Profile picture"
                className="object-cover"
                aria-label="Profile picture"
              />
            </div>
          </div>
        </div>

        {/* Right side - Mobile */}
        <div className="flex sm:hidden items-center">
          <div className="avatar">
            <div className="w-7 rounded-full">
              <img
                src={christinaThumbnail}
                alt="Profile"
                className="object-cover"
                aria-label="Profile picture"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Row */}
      <div className="flex sm:hidden px-4 pb-2">
        <div className="relative flex-1">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="input input-bordered w-full pl-10 h-9 rounded-full hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            aria-label="Search input"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
