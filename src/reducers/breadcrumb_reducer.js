import { SET_BREADCRUMB } from '../actions/BreadCrumb';
import { REMOVE_BREADCRUMB } from '../actions/BreadCrumb';
import _ from 'lodash';

export default function (state = {}, action) {
    console.log('inside reducer of BReadCrumb state:', state);
    console.log('inside reducer of BReadCrumb action:', action);
    switch (action.type) {

        case SET_BREADCRUMB:
            console.log('REducer SET_BREADCRUMB state:', state);
            console.log('REducer SET_BREADCRUMB action.payload:', action.payload);
            return [...state, action.payload];
        
        case REMOVE_BREADCRUMB:
            console.log('REducer REMOVE_BREADCRUMB state:', state);
            console.log('REducer REMOVE_BREADCRUMB action.payload:', action.payload);
            console.log('REducer REMOVE_BREADCRUMB action.payload:', _.dropRight(state));
            return _.dropRight(state); //Remove the last value

        default:
            return ['Home']; // Default value in Home Page
    }
}
