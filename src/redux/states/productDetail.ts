import { createSlice } from '@reduxjs/toolkit';
import { ProductDetail } from '../../types/productDetail';
export const initialState: ProductDetail = {
  item:{
    id: '',
    title: '',
    price: {
      currency: '',
      amount: 0,
    },
    picture: '',
    condition: '',
    free_shiping: false,
    sold_quantity: 0,
    description: '',
  }
  
};

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: initialState,
  reducers: {
    filterProductById: (state, action) => {
      return action.payload;
    },
    productClear: (state, action) => {
      return initialState;
    },
  },
});

export const { filterProductById, productClear } = productDetailSlice.actions;

export default productDetailSlice.reducer;
