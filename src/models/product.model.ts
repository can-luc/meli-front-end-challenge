export interface productModel {
 
    author: {
      name: string,
      lastname: string,
    };
  
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
    picture: string;
    condition: string;
    free_shiping: boolean;
    sold_quantity: number;
    description: string;
  };
}
