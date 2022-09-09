import { loadAbort } from '../common/utils/load-abort-axios.utility';
import axios from 'axios';

export const getProducts = (query: string) => {
  const Limit='4';
  const SearchProductsUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${Limit}`;
  const controller = loadAbort();
  return {
    call: axios.get(SearchProductsUrl, { signal: controller.signal }),
    controller,
  };
};

export const getProductById = (query: string) => {
  const controller = loadAbort();

  const ByIdUrl = `https://api.mercadolibre.com/items/${query}`;

  return {
    call: axios.get(ByIdUrl, { signal: controller.signal }),
    controller,
  };
};

export const getProductByIdDescription = (query: string) => {
  const controller = loadAbort();

  const ByDescriptionUrl = `https://api.mercadolibre.com/items/${query}/description`;

  return {
    call: axios.get(ByDescriptionUrl, { signal: controller.signal }),
    controller,
  };
};
