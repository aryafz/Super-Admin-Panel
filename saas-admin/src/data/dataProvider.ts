import type { DataProvider } from 'react-admin'
import { fetchUtils } from 'react-admin'
import { httpClient } from './httpClient'

const apiUrl = import.meta.env.VITE_API_URL

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination
        const { field, order } = params.sort
        const query = {
            page,
            limit: perPage,
            sort: `${field},${order}`,
            ...params.filter,
        }
        const url = `${apiUrl}/${resource}?` + fetchUtils.queryParameters(query)
        const { data } = await httpClient.get(url)
        return {
            data: data.items ?? data,
            total: data.total ?? data.length,
        }
    },
    getOne: async (resource, params) => {
        const { data } = await httpClient.get(`${apiUrl}/${resource}/${params.id}`)
        return { data }
    },
    create: async (resource, params) => {
        const { data } = await httpClient.post(`${apiUrl}/${resource}`, params.data)
        return { data }
    },
    update: async (resource, params) => {
        const { data } = await httpClient.put(`${apiUrl}/${resource}/${params.id}`, params.data)
        return { data }
    },
    delete: async (resource, params) => {
        const { data } = await httpClient.delete(`${apiUrl}/${resource}/${params.id}`)
        return { data }
    },
    getMany: async (resource, params) => {
        const query = fetchUtils.queryParameters({ filter: { id: params.ids } })
        const { data } = await httpClient.get(`${apiUrl}/${resource}?${query}`)
        return { data: data.items ?? data }
    },
    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination
        const { field, order } = params.sort
        const query = {
            page,
            limit: perPage,
            sort: `${field},${order}`,
            filter: { ...params.filter, [params.target]: params.id },
        }
        const url = `${apiUrl}/${resource}?` + fetchUtils.queryParameters(query)
        const { data } = await httpClient.get(url)
        return {
            data: data.items ?? data,
            total: data.total ?? data.length,
        }
    },
    updateMany: async () => Promise.resolve({ data: [] }),
    deleteMany: async () => Promise.resolve({ data: [] }),
}

export default dataProvider
