export const tokenKey = import.meta.env.VITE_AUTH_STORAGE_KEY || 'saas_admin_token';
export const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (t: string) => localStorage.setItem(tokenKey, t);
export const clearToken = () => localStorage.removeItem(tokenKey);
