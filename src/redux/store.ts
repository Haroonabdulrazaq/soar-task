import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './slices/transactionSlices';
import cardsReducer from './slices/cardSlices';
import profileReducer from './slices/profileSlices';
import weeklyActivitiesReducer from './slices/weeklyActivitySlices';
import navbarReducer from './slices/navbarSlices';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    cards: cardsReducer,
    profiles: profileReducer,
    weeklyActivities: weeklyActivitiesReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
