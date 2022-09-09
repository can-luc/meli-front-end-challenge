import { createSlice } from '@reduxjs/toolkit';
import { modelProduct } from '../../models';
const initialState: modelProduct[] = [];

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    filterProducts: (state, action) => {
      return action.payload;
    },
    filterProductById: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterProducts, filterProductById } = productSlice.actions;

export default productSlice.reducer;
