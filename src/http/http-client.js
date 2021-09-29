import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    console.log('Axios Request', config);
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});
