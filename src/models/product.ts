export interface modelProduct {
 
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
    free_shiping: boolean | undefined;
    sold_quantity: number;
    description: string;
  };
}
export interface modelCategory {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: object[] | undefined;
}
