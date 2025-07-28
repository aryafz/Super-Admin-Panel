import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL
const tenantHeaderName = import.meta.env.VITE_TENANT_HEADER_NAME || 'x-tenant-id'

let selectedSite: string | null = null

export const setTenant = (siteId: string | null) => {
    selectedSite = siteId
}

export const httpClient = axios.create({ baseURL: apiUrl })

httpClient.interceptors.request.use(config => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_STORAGE_KEY)
    if (token) {
        config.headers = config.headers || {}
        config.headers['Authorization'] = `Bearer ${token}`
    }
    if (selectedSite) {
        config.headers = config.headers || {}
        config.headers[tenantHeaderName] = selectedSite
    }
    return config
})
