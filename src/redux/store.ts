import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './states/product';

export interface AppStore {
  product: any;
}

export default configureStore<AppStore>({
  reducer: {
    product: productSlice.reducer,
  },
});
