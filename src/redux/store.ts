import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './slices/transactionSlices';
import cardsReducer from './slices/cardSlices';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
