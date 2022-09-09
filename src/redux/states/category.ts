import { createSlice } from '@reduxjs/toolkit';
import { modelCategory } from '../../models';

const initialState: modelCategory[] = [];

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    filterCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterCategories } = categorySlice.actions;

export default categorySlice.reducer;
