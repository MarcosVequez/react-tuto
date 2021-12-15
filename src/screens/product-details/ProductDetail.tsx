import React from 'react';
import { Typography, Button } from '@mui/material';
import { useLocation } from 'react-router';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  console.log(product);

  const onClickBackButton = () => {
    history.back();
  };

  return (
    <div>
      <Typography>Soy la pestaña de detalles</Typography>
      <Button onClick={onClickBackButton}>Volver atrás</Button>
    </div>
  );
};

export default ProductDetails;
