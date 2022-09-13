import { createSlice } from '@reduxjs/toolkit';
import { productModel } from '../../models';
const initialState: productModel[] = [];

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
    productClear: (state, action) => {
      return initialState;
    },
    
  },
});

export const { filterProducts, filterProductById,productClear } = productSlice.actions;

export default productSlice.reducer;
