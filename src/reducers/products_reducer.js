import { FETCH_PRODUCTS } from '../actions/ProductList';
import { FETCH_PRODUCT } from '../actions/ProductList';
import { CREATE_PRODUCT } from '../actions/ProductList';
import { UPDATE_PRODUCT } from '../actions/ProductList';

export default function (state = {}, action) {
    switch (action.type) {

        case FETCH_PRODUCTS:
            console.log('REducer FETCH PRODUCTS:', action.payload);
            return action.payload;

        case FETCH_PRODUCT:
            console.log(action.payload.data);
            const post = action.payload.data;
            return post;

        case CREATE_PRODUCT:
            console.log('REducer CREATE_PRODUCT state:', state);
            console.log('REducer CREATE_PRODUCT action.payload:', action.payload);
            return [...state, action.payload];
        
        case UPDATE_PRODUCT:
        console.log('REducer CREATE_PRODUCT state:', state);
        console.log('REducer CREATE_PRODUCT action.payload:', action.payload);
        // state has full list of products. use filter to remove the matching one  from the array.
        let product = state.filter((val) => {return val.product_id !== action.payload.product_id })
        // Add the new updated value to the array
        return [...product, action.payload];

        default:
            return state;
    }
}
