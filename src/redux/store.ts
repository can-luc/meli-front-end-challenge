import { configureStore } from '@reduxjs/toolkit';
import { modelCategory, modelProduct } from '../models';
import { categorySlice } from './states/category';
import { productSlice } from './states/product';

export interface AppStore {
  product: any;
  category: modelCategory[];
}

export default configureStore<AppStore>({
  reducer: {
    product: productSlice.reducer,
    category: categorySlice.reducer,
  },
});
