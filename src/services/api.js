import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'https://customizable-forms-ab996e6d17b2.herokuapp.com/api'
});

export default api;