import axios from 'axios';

const api = axios.create({
    baseURL: 'https://services-ecoleta.herokuapp.com'
});
export default api;