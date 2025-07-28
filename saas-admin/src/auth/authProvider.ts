import type { AuthProvider } from 'react-admin';
import { api } from '../data/httpClient';
import { clearToken, setToken, getToken } from '../utils/storage';

const TOKEN_FIELD = import.meta.env.VITE_TOKEN_KEY || 'access_token';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const res = await api.post('/auth/login', { email: username, password });
    const token = res.data?.[TOKEN_FIELD];
    if (!token) throw new Error('Invalid login response: token missing');
    setToken(token);
    await api.get('/auth/me');
  },

  logout: async () => {
    clearToken();
    return Promise.resolve();
  },

  checkAuth: async () => {
    const token = getToken();
    if (!token) return Promise.reject();
    try {
      await api.get('/auth/me');
      return Promise.resolve();
    } catch {
      clearToken();
      return Promise.reject();
    }
  },

  checkError: async (error) => {
    const status = error?.status || error?.response?.status;
    if (status === 401) {
      clearToken();
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: async () => {
    try {
      const { data } = await api.get('/auth/me');
      return data?.role || 'user';
    } catch {
      return 'user';
    }
  },

  getIdentity: async () => {
    const { data } = await api.get('/auth/me');
    return { id: data?.id, fullName: data?.email, ...data };
  }
};
