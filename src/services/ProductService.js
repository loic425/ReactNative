/**
 * Created by quentinmachard on 07/03/2018.
 */
import axios from 'axios';

/**
 * Fetch list of Products
 *
 * @returns {AxiosPromise<T>}
 */
export const fetchProducts = () => {
    const url = '/api/products';

    return axios.get(url);
};