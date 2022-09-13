import { ProductDetail } from "../types/productDetail";

export const productDetailAdapter = (Product: ProductDetail) => ({
  author: {
    name: 'Lucas',
    lastname: 'Caniella',
  },
  item: {
    id: Product.id,
    title: Product.title,
    price: Product.price,
    picture: Product.picture,
    condition: Product.condition,
    free_shipping: Product.free_shiping,
    sold_quantity: Product.sold_quantity,
    description: Product.description,
  },
});
