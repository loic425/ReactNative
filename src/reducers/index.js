import {combineReducers} from 'redux';

import ProductsReducer from './ProductsReducer';
import ProductReducer from "./ProductReducer";

export default combineReducers({
    ProductsReducer: ProductsReducer,
    ProductReducer: ProductReducer,
});
