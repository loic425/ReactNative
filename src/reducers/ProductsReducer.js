import * as ProductsConstants from '../constants/ProductsConstants';

const initialState = {
    products: [],
    isLoading: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ProductsConstants.LIST_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case ProductsConstants.LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.data
            };
        case ProductsConstants.LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
