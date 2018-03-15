import * as ProductConstants from '../constants/ProductConstants';

const initialState = {
    product: {},
    isLoading: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ProductConstants.GET_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case ProductConstants.GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.data
            };
        case ProductConstants.GET_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
