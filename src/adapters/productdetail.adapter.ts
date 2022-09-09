export const productDetailAdapter = (Product: any) => ({
  author: {
    name: 'Lucas',
    lastname: 'Caniella',
  },
  item: {
    id: Product.id,
    title: Product.title,
    price: {
      currency: Product.currency_id,
      amount: Product.price,
    },
    picture: Product.thumbnail,
    condition: Product.condition,
   sold_quantity: Product.sold_quantity,
  },
});
