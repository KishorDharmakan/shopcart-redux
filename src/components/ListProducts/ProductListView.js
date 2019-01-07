import React from 'react';
import { Product } from './Product';

const ProductListView = (props) => {
    return props.productlist.map(val =>
        <div key={val.product_id}><Product key={val.product_id} productVal={val} /></div>)
}

export default ProductListView;
