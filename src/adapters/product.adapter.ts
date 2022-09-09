export const productAdapter = (Product: any) => ({
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
    free_shiping: Product.shipping,
    sold_quantity: Product.sold_quantity,
    location: Product.address.city_name,
  },
});
