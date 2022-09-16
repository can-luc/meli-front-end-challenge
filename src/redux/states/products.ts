import { createSlice } from '@reduxjs/toolkit';
import { ProductList } from '../../types/producList';

export const initialState: ProductList = {
  author: {
    name: '',
    lastname: '',
  },
  categories: [],
  items: [
    {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      location: '',
      index: 0,
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    filterProducts: (state, action) => {
      return { ...state, ...action.payload };
    },

    productsClear: (state, action) => {
      return initialState;
    },
  },
});

export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
