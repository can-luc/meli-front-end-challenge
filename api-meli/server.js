const express = require('express');
const cors = require('cors');
const { userInfo } = require('os');
const app = express();
const axios = require('axios').default;
const port = 3000;

const API = 'https://api.mercadolibre.com';

const corsOptions = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

const errorHandler = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  const status = error.status || 400;

  response.status(status).send(error.message);
};

app.get('/allProducts/:id', cors(), async (request, response, next) => {
  try {
    const Limit = '4';
    const Url = `${API}/sites/MLA/search?q=${request.params.id}&limit=${Limit}`;

    const apiResponse = await axios.get(Url);
    const jsonResponse = apiResponse.data;

    response.send(ProductAdapter(jsonResponse));
  } catch (error) {
    next(error);
  }
});
function ProductAdapter(props) {
  const Items = [];
  const Categories = [];

  //save Items
  props.results?.map((x) => {
    
    const item = {
      id: x.id,
      title: x.title,
      price: {
        currency: x.currency_id,
        amount: x.price,
      },
      picture: x.thumbnail,
      condition: x.condition,
      free_shiping: x.shipping.free_shipping,
      sold_quantity: x.sold_quantity,
      location: x.address.city_name,
    };
    console.log(item);
    Items.push(item);
  });
  //

  //save Categories
  if (props.filters.length === 0) {
    const categoriesList = props.available_filters?.find(
      (x) => x.id === 'category'
    );

    categoriesList?.values?.map((x) => {
      Categories.push(x.name);
    });
  } else {
    props.filters[0].values[0].path_from_root?.map((x) => {
      Categories.push(x.name);
    });
  }
  const sliceCategories = Categories.slice(0, 5);
  //

  const product = {
    author: {
      name: 'Lucas',
      lastname: 'caniella',
    },
    categories: sliceCategories,
    items: Items,
  };

  return product;
}

app.get('/ProductById', cors(), async (request, response, next) => {
  try {
    const Url = `${API}/items/${request.query.product}`;
    const UrlDescription = `${API}/items/${request.query.product}/description`;

    await axios.all([axios.get(Url), axios.get(UrlDescription)]).then(
      axios.spread((byId, byDescription) => {
        console.log(byId);

        response.send(ProductDetailAdapter(byId.data, byDescription.data));
        //response.send({ id: byId.data, description: byDescription.data });
      })
    );
  } catch (error) {
    next(error);
  }
});
function ProductDetailAdapter(id, Description) {

  const productDetail = {
    author: {
      name: 'Lucas',
      lastname: 'Caniella',
    },
    item: {
      id: id.id,
      title: id.title,
      price: {
        currency: id.currency_id,
        amount: id.price,
      },
      picture: id.thumbnail,
      condition: id.condition,
      sold_quantity: id.sold_quantity,
      description: Description.plain_text,
    },
  };

  return productDetail;
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
