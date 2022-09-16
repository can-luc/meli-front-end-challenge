import { configureStore } from '@reduxjs/toolkit';
import { ProductList } from '../types/producList';
import { ProductDetail } from '../types/productDetail';
import { productDetailSlice } from './states/productDetail';
import { productsSlice } from './states/products';
export interface AppStore {
  productDetail: ProductDetail;
  products: ProductList;
}

export default configureStore<AppStore>({
  reducer: {
    productDetail: productDetailSlice.reducer,
    products: productsSlice.reducer,
  },
});
