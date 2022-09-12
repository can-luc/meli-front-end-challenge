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
    const product = {
      author: {
        name: 'lucas',
        lastname: 'caniella',
      },
      categories: [],
      items: [
        (id = ''),
        (title = ''),
        (price = {
          currency: '',
          amount: 0,
        }),
        (picture = ''),
        (condition = ''),
        (free_shiping = false),
        (sold_quantity = 0),
        (location = ''),
      ],
    };

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
      free_shiping: x.shipping,
      sold_quantity: x.sold_quantity,
      location: x.address.city_name,
    };
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
  const sliceCategories=Categories.slice(0, 5);
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
      
        response.send({ id: byId.data, description: byDescription.data });
      })
    );
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
