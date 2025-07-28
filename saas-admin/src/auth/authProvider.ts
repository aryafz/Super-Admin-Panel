import type { AuthProvider } from 'react-admin'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL
const tokenKey = import.meta.env.VITE_TOKEN_KEY || 'access_token'
const storageKey = import.meta.env.VITE_AUTH_STORAGE_KEY || 'saas_admin_token'

const http = axios.create({ baseURL: apiUrl })

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { data } = await http.post('/auth/login', { email: username, password })
        const token = data[tokenKey]
        if (!token) throw new Error('Invalid login response')
        localStorage.setItem(storageKey, token)
        http.defaults.headers.common.Authorization = `Bearer ${token}`
        await http.get('/auth/me')
        return Promise.resolve()
    },
    logout: () => {
        localStorage.removeItem(storageKey)
        delete http.defaults.headers.common.Authorization
        return Promise.resolve()
    },
    checkAuth: async () => {
        const token = localStorage.getItem(storageKey)
        if (token) {
            http.defaults.headers.common.Authorization = `Bearer ${token}`
            try {
                await http.get('/auth/me')
                return Promise.resolve()
            } catch {
                return Promise.reject()
            }
        }
        return Promise.reject()
    },
    getIdentity: async () => {
        const { data } = await http.get('/auth/me')
        return data
    },
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
}

export default authProvider
