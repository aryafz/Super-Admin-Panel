import axios from 'axios';
import { getToken } from '../utils/storage';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20000
});

const TENANT_HEADER = import.meta.env.VITE_TENANT_HEADER_NAME || 'x-tenant-id';

export const setAuthHeader = (config: any) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

api.interceptors.request.use((config) => {
  return setAuthHeader(config);
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      const message = data?.message || 'Request failed';
      return Promise.reject({ status, message, data });
    }
    return Promise.reject({ status: 0, message: 'Network error' });
  }
);

export { api, TENANT_HEADER };
