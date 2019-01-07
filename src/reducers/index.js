import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import BreadCrumbReducer from './breadcrumb_reducer';


const rootReducer = combineReducers({
  productsList:ProductsReducer,
  breadCrumbList:BreadCrumbReducer,
});

export default rootReducer;
