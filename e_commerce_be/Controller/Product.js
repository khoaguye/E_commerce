import axios from "axios";

//Fetch 20 product for Product page
export const allProduct = (req, res) => {
    axios.get('https://dummyjson.com/products?limit=20&skip=10&select=title,price,description,rating,images')
      .then(response => {
        const products = response.data;
        res.json(products);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }

//Fetch six product for landing page 
export const productContent = (req, res) => {
    axios.get('https://dummyjson.com/products?limit=6&skip=10&select=title,price,description,rating,images')
      .then(response => {
        const products = response.data;
        res.json(products);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }

  //Fetch all the category
  export const category = (req, res) => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        const category = response.data;
        res.json(category);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }

  //Fetch the product by category
  export const productCategory = (req, res) => {
    const category = req.params.category;
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(response => {
        const cat = response.data;
        res.json(cat);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }

  //Fetch the search product

  export const searchProduct = (req, res) => {
    const product = req.params.product;
    axios.get(`https://dummyjson.com/products/search?q=${product}`)
      .then(response => {
        const product = response.data;
        res.json(product);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }

