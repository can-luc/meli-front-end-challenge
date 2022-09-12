import { loadAbort } from '../common/utils/load-abort-axios.utility';
import axios from 'axios';

export const getProducts = (query: string) => {
  const Url = `http://localhost:3000/allProducts/${query}`;

  const controller = loadAbort();
  return {
    call: axios.get(Url, { signal: controller.signal }),
    controller,
  };
};

export const getProductById = (query: string) => {
  const Url = `http://localhost:3000/ProductById`;

  return {
    call: axios.get(Url, {
      params: {
        product: query,
      },
    }),
  };
};
