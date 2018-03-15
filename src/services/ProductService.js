/**
 * Created by quentinmachard on 07/03/2018.
 */
import axios from 'axios';
import Config from 'react-native-config';

/**
 * Fetch list of Products
 *
 * @returns {AxiosPromise<T>}
 */
export const fetchProducts = () => {
    const resource = `${Config.API_BASE_URL}/api/products/`;

    return axios.get(resource).then((response) => {
        return response.data._embedded.items;
    });
};

/**
 * Fetch Details of Product
 * @param code
 * @returns {AxiosPromise<T>}
 */
export const fetchProduct = (code) => {
    const resource = `${Config.API_BASE_URL}/api/products/${code}`;

    return axios.get(resource).then((response) => {
        return response.data;
    });
};
