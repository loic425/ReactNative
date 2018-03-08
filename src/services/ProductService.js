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
    // Todo: Configuration + Axios Init
    const resource = 'http://pre-prod.jedisjeux.net/api/products/';

    return axios.get(resource).then((response) => {
        return response.data._embedded.items;
    });
};
