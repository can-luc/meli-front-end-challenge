export type ProductList = {
  picture: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  free_shipping: boolean;
  city: string;
  index: number;
  id: string;
};
