import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Card } from '../../common/types/index.types';
import axios from 'axios';

interface ICard {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: ICard = {
  cards: [],
  loading: false,
  error: null,
};

export const fetchCards = createAsyncThunk<Card[]>(
  'cards/fetchCards',
  async () => {
    const response = await axios.get('http://localhost:3000/cards');
    return response.data;
  },
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unable to fetch cards';
    });
  },
});

export default cardSlice.reducer;
