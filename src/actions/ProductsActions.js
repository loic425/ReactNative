import * as ProductsConstants from "../constants/ProductsConstants";
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
                    data: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: ProductsConstants.LIST_FAILURE
                });
            })
            ;
    }
};
