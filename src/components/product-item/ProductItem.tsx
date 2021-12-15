import React from 'react';
import useStyles from './product-item-styles';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

const ProductItem = ({ product }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const onClickItem = () => {
        navigate('details', { state: product });
    };

    return (
        <div onClick={onClickItem} className={classes.container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={product.image}></img>
            </div>

            <div className={classes.brandContainer}>
                <div className={classes.brandInnerContainer}>
                    <Typography className={classes.brandText}>{product.brand}</Typography>
                </div>
            </div>
            <div className={classes.titleContainer}>
                <Typography align="center" className={classes.titleText}>
                    {product.name}
                </Typography>
            </div>
            <div className={classes.actionContainer}>
                <Typography align="center" className={classes.priceText}>
                    {`${product.unitPrice}€`}
                </Typography>
                <Button variant="outlined">Añadir a la cesta</Button>
            </div>
        </div>
    );
};

export default ProductItem;