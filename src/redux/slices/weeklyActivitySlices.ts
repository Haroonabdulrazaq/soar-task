import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeeklyActivity } from '../../common/types/index.types';

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchWeeklyActivities = createAsyncThunk(
  'weeklyActivities/fetchWeeklyActivities',
  async () => {
    const response = await axios.get(`${apiUrl}/weeklyActivities`);
    console.log('|||||||||||||||||||||||||||||||||||');
    console.log(response.data);
    console.log('|||||||||||||||||||||||||||||||||||');
    return response.data;
  },
);

interface IWeeklyActivityState {
  data: WeeklyActivity;
  loading: boolean;
  error: string | null;
}

const initialState: IWeeklyActivityState = {
  data: {} as WeeklyActivity,
  loading: false,
  error: null,
};

const weeklyActivitySlice = createSlice({
  name: 'weeklyActivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyActivities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeeklyActivities.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWeeklyActivities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Unable to fetch weekly activities';
    });
  },
});

export default weeklyActivitySlice.reducer;
