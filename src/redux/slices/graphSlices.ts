import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ExpenseStatistics,
  WeeklyActivity,
  BalanceHistory,
} from '../../common/types/index.types';

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchWeeklyActivities = createAsyncThunk(
  'weeklyActivities/fetchWeeklyActivities',
  async () => {
    const response = await axios.get(`${apiUrl}/weeklyActivities`);
    return response.data;
  },
);

export const fetchExpenseStatistics = createAsyncThunk<
  ExpenseStatistics[],
  void
>('expenseStatistics/fetchExpenseStatistics', async () => {
  const response = await axios.get(`${apiUrl}/expenseStatistics`);
  return response.data;
});

export const fetchBalanceHistory = createAsyncThunk<BalanceHistory, void>(
  'balanceHistory/fetchBalanceHistory',
  async () => {
    const response = await axios.get(`${apiUrl}/balanceHistory`);
    return response.data;
  },
);

interface IWeeklyActivityState {
  data: WeeklyActivity;
  loading: boolean;
  error: string | null;
}

interface IExpenseStatisticsState {
  data: ExpenseStatistics[];
  loading: boolean;
  error: string | null;
}

interface IBalanceHistoryState {
  data: BalanceHistory;
  loading: boolean;
  error: string | null;
}

interface IState {
  weeklyActivities: IWeeklyActivityState;
  expenseStatistics: IExpenseStatisticsState;
  balanceHistory: IBalanceHistoryState;
}

const initialState: IState = {
  weeklyActivities: {
    data: {} as WeeklyActivity,
    loading: false,
    error: null,
  },
  expenseStatistics: {
    data: [] as ExpenseStatistics[],
    loading: false,
    error: null,
  },
  balanceHistory: {
    data: {} as BalanceHistory,
    loading: false,
    error: null,
  },
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Weekly Activities
    builder.addCase(fetchWeeklyActivities.pending, (state) => {
      state.weeklyActivities.loading = true;
    });
    builder.addCase(fetchWeeklyActivities.fulfilled, (state, action) => {
      state.weeklyActivities.loading = false;
      state.weeklyActivities.data = action.payload;
    });
    builder.addCase(fetchWeeklyActivities.rejected, (state, action) => {
      state.weeklyActivities.loading = false;
      state.weeklyActivities.error =
        action.error.message ?? 'Unable to fetch weekly activities';
    });
    // Fetch Expense Statistics
    builder.addCase(fetchExpenseStatistics.pending, (state) => {
      state.expenseStatistics.loading = true;
    });
    builder.addCase(fetchExpenseStatistics.fulfilled, (state, action) => {
      state.expenseStatistics.loading = false;
      state.expenseStatistics.data = action.payload;
    });
    builder.addCase(fetchExpenseStatistics.rejected, (state, action) => {
      state.expenseStatistics.loading = false;
      state.expenseStatistics.error =
        action.error.message ?? 'Unable to fetch expense statistics';
    });
    // Fetch Balance History
    builder.addCase(fetchBalanceHistory.pending, (state) => {
      state.balanceHistory.loading = true;
    });
    builder.addCase(fetchBalanceHistory.fulfilled, (state, action) => {
      state.balanceHistory.loading = false;
      state.balanceHistory.data = action.payload;
    });
    builder.addCase(fetchBalanceHistory.rejected, (state, action) => {
      state.balanceHistory.loading = false;
      state.balanceHistory.error =
        action.error.message ?? 'Unable to fetch balance history';
    });
  },
});
export default graphSlice.reducer;
