import * as ProductsConstants from "../constants/ProductConstants";
import * as ProductService from "../services/ProductService";

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({
            type: ProductsConstants.LIST_REQUESTED,
        });

        return ProductService.fetchProducts()
            .then((data) => {
                dispatch({
                    type: ProductsConstants.LIST_SUCCESS,
                    data
                });
            })
            .catch((error) => {
                dispatch({
                    type: ProductsConstants.LIST_FAILURE,
                    error
                });
            })
            ;
    }
};

export const fetchProduct = (code) => {
    return (dispatch) => {
        dispatch({
            type: ProductsConstants.GET_REQUESTED,
        });

        return ProductService.fetchProduct(code)
            .then((data) => {
                dispatch({
                    type: ProductsConstants.GET_SUCCESS,
                    data
                });
            })
            .catch((error) => {
                dispatch({
                    type: ProductsConstants.GET_FAILURE,
                    error
                });
            })
            ;
    }
};
