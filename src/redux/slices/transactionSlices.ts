import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Transaction } from '../../common/types/index.types';

const apiUrl = import.meta.env.VITE_API_URL;
interface ITransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: ITransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'transactions/fetchTransactions',
  async () => {
    const response = await axios.get<Transaction[]>(`${apiUrl}/transactions`);
    return response.data;
  },
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTransactions.fulfilled,
      (state, action: PayloadAction<Transaction[]>) => {
        state.loading = false;
        state.transactions = action.payload;
      },
    );
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Unable to fetch transaction at this moment';
    });
  },
});

export default transactionSlice.reducer;
export const { getTransactions } = transactionSlice.actions;
