import axios from 'axios';

// getting api
axios.defaults.baseURL = 'https://weshare-api-app.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
