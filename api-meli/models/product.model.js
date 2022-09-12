function Product () {
 
    
    author: {
      name: '';
      lastname: '';
    };
    categories:[];
    items:[
      id= '',
      title= '',
      price= {
        currency: '',
        amount: 0,
      },
      picture= '',
      condition= '',
      free_shiping= false,
      sold_quantity= 0,
      location= '',
    ]
   
};
module.exports = Product;