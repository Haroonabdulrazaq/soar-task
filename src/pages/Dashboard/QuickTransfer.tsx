import { useState, useRef, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IoIosPaperPlane } from 'react-icons/io';
//State
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchProfiles } from '../../redux/slices/profileSlices';

const QuickTransfer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    profiles,
    loading,
    error: errorProfile,
  } = useSelector((state: RootState) => state.profiles);

  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowLeftScroll(scrollContainerRef.current.scrollLeft > 0);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleSend = () => {
    setIsError(false);
    if (selectedProfile === null) {
      setIsError(true);
      setError('Please select a profile');
      return;
    }
    if (!/^\d+$/.test(amount)) {
      setIsError(true);
      setError('Invalid amount');
      return;
    }

    if (amount && selectedProfile !== null) {
      setAmount('');
      setSelectedProfile(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorProfile) {
    return <div>Error: {errorProfile}</div>;
  }

  return (
    <div className="bg-skin-white rounded-2xl p-6">
      {/* Profiles Section */}
      <div className="relative">
        {showLeftScroll && (
          <button
            onClick={() => scrollTo('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <FaChevronLeft className="text-skin-base" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar relative py-2"
        >
          {profiles &&
            profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile.id)}
                className="flex flex-col items-center gap-2 cursor-pointer min-w-[100px]"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`text-skin-black text-sm ${selectedProfile === profile.id ? 'font-semibold' : ''}`}
                  >
                    {profile.name}
                  </p>
                  <p className="text-skin-accent text-xs">{profile.role}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={() => scrollTo('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronRight className="text-skin-base" />
        </button>
      </div>

      {/* Amount Input Section */}
      <div className="flex flex-row items-center justify-around mt-6">
        <p className="text-[12px] sm:text-[15px] text-skin-accent mb-2">
          Write Amount
        </p>
        <div className="relative">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="525.50"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-skin-sharp"
            aria-label="Input Amount"
          />
          {isError && (
            <p className="text-red-500 text-xs absolute top-full left-0">
              {error}
            </p>
          )}
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-skin-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90"
          >
            <span>Send</span>
            <IoIosPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
