import * as ProductConstants from '../constants/ProductConstants';

const initialState = {
    products: [],
    isLoading: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ProductConstants.LIST_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case ProductConstants.LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.data
            };
        case ProductConstants.LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
