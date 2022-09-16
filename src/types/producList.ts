export type ProductList = {
  author: {
    name: string ;
    lastname: string ;
  };
  categories: Array<string> ;
  items: Array<Item> ;
};

export type Item = {
  id: string;
  index: number;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  location: string;
};
