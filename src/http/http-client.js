import axios from 'axios';
import { appStore } from '../redux-store/store';

const store = appStore;

export const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});

httpClient.interceptors.request.use(
  (config) => {
    if (appStore.getState().auth.token) {
      config.headers['Authorization'] = `Bearer ${
        appStore.getState().auth.token
      }`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
