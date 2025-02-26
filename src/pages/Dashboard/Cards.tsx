import { useEffect } from 'react';
// State
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../redux/slices/cardSlices';
import { RootState, AppDispatch } from '../../redux/store';

import ChipCardBlack from '../../assets/images/card-chip-black.png';
import masterCardWhite from '../../assets/images/mastercard-white.png';
import masterCardBlack from '../../assets/images/mastercard-black.png';
import ChipCardWhite from '../../assets/images/card-chip-white.png';

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    cards,
    error: cardError,
    loading: cardLoading,
  } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (cardLoading) return <p>Loading cards...</p>;
  if (cardError) return <p>Error: {cardError}</p>;
  return (
    <div className="w-full sm:w-2/3 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-skin-base text-xl font-semibold inter-600">
          My Cards
        </h2>
        <a
          href="#"
          className="text-skin-sharp inter-500 hover:underline hover:text-skin-base"
        >
          See All
        </a>
      </div>

      {/* Cards Container */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {cards &&
          cards.map((card, index) => (
            <div
              key={index}
              className={`min-w-[320px] min-h-[200px] ${card.color} flex flex-col justify-between rounded-2xl border border-skin-lavender`}
            >
              {/* Top section */}
              <div
                className={`p-6 ${
                  card.color === 'text-white'
                    ? 'bg-gradient-bottom-lavender'
                    : 'bg-gradient-bottom-dirty-white'
                }
                  rounded-t-2xl`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-11px sm:text-[12px] opacity-80 lato-regular">
                      Balance
                    </p>
                    <p className="text-[16px] sm:text-[20px] lato-semibold">
                      ${card.balance.toLocaleString()}
                    </p>
                  </div>
                  <img
                    src={
                      card.color === 'text-white'
                        ? ChipCardWhite
                        : ChipCardBlack
                    }
                    alt="Card Chip"
                    className="h-8"
                    aria-label="Card Chip"
                  />
                </div>

                <div className="flex justify-start items-center gap-4">
                  <div>
                    <p className="font-[400] text-[10px] sm:text-[12px] opacity-80 lato-regular">
                      CARD HOLDER
                    </p>
                    <p className="font-medium text-[13px] sm:text-[15px] lato-semibold">
                      {card.cardHolder}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80 font-normal text-[10px] sm:text-[12px] lato-regular">
                      VALID THRU
                    </p>
                    <p className="font-medium text-[13px] sm:text-[15px] lato-semibold">
                      {card.validThru}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div
                className={`p-6 rounded-b-2xl ${card.color === 'text-white' ? 'bg-gradient-right-lavender' : 'bg-gradient-right-dirty-white'} border-skin-gray`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium lato-semibold text-[15px] sm:text-[22px]">
                    {card.cardNumber}
                  </p>
                  <img
                    src={
                      card.color === 'text-white'
                        ? masterCardWhite
                        : masterCardBlack
                    }
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
  );
};

export default Cards;
