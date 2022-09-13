export const productDetailAdapter = (Product: any) => ({
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
    free_shipping: Product.free_shipping,
    sold_quantity: Product.sold_quantity,
    description: Product.description,
  },
});
