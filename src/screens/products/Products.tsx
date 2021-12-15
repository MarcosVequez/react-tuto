import React, { useState, useEffect } from 'react';
import { Typography, LinearProgress } from '@mui/material';
import useStyles from './Products-styles';
import ProductsService from '../../services/ProductsService';
import ProductItem from '../../components/product-item/ProductItem';

const Products = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getAsyncProducts = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    };

    getAsyncProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className={classes.loaderContainer}>
        <LinearProgress className={classes.loader} />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h2">Página de productos</Typography>
      </div>
      <div className={classes.productsContainer}>
        {products.map((item) => {
          return <ProductItem product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
