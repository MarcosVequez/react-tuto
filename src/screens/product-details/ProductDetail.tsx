import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import useStyles from './product-details-styles';

const ProductDetails = () => {
  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const product = location.state;

  useEffect(() => {
    if (!product) {
      navigate('/', { replace: true });
    }
  }, []);

  if (!product) {
    return <></>;
  }
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.topContainer}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={product.image} />
          </div>
          <div className={classes.topRightContainer}>
            <Typography className={classes.textBrand}>{product.brand}</Typography>
            <Typography className={classes.textName}>{product.name}</Typography>
            <Typography>{product.amount}</Typography>
            <Typography className={classes.textPrice}>{`${product.unitPrice}€`}</Typography>
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <Typography className={classes.bottomHeader}>Ingredientes</Typography>
          <Typography className={classes.bottomContent}>{product.ingredients}</Typography>
          <Typography className={classes.bottomHeader}>Conservación</Typography>
          <Typography className={classes.bottomContent}>{product.conservation}</Typography>
          {product.howToUse && (
            <>
              <Typography className={classes.bottomHeader}>Modo de empleo</Typography>
              <Typography className={classes.bottomContent}>{product.howToUse}</Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
