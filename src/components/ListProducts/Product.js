import React from 'react';
import { Link } from 'react-router-dom';
import './ListProducts.css';

export const Product = (props) => {
    console.log('inside props:', props);
    return (
        <div className="product col-sm">
            <div className="productname">
                {props.productVal.product_name}
            </div>
            <div className="product-image">
                <Link to={`/products/${props.productVal.product_id}`}>
                    <img
                        src={props.productVal.product_photo}
                        alt={props.productVal.product_name}
                        className="img-thumbnail"
                    />
                </Link>
            </div>
            <div className="productprice">
                {props.productVal.product_price}
            </div>
        </div>
    )

}