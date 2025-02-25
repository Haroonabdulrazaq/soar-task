import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from '../../common/types/index.types';

interface IProfile {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
}

const initialState: IProfile = {
  profiles: [],
  loading: false,
  error: null,
};

export const fetchProfiles = createAsyncThunk<Profile[]>(
  'profiles/fetchProfiles',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/profiles');
      return response.data;
    } catch (error) {
      console.error('Error fetching profiles:', error);
      throw error;
    }
  },
);

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfiles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      state.loading = false;
      state.profiles = action.payload;
    });
    builder.addCase(fetchProfiles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unable to fetch profiles';
    });
  },
});

export default profileSlice.reducer;
