import type { DataProvider, HttpError } from 'react-admin';
import { api, TENANT_HEADER } from './httpClient';
import { mapListQuery } from './queryMap';

const siteBound = new Set(['site-themes', 'site-plans', 'site-features', 'payments']);

let currentSiteId: string | null = null;
export const setTenantSite = (siteId: string | null) => { currentSiteId = siteId; };

const withTenant = (resource: string, config: any = {}) => {
  if (siteBound.has(resource)) {
    if (!currentSiteId) {
      const err: HttpError = { status: 400, message: 'Select a Site first (tenant required)', name: 'HttpError', body: null };
      throw err;
    }
    config.headers = config.headers || {};
    config.headers[TENANT_HEADER] = currentSiteId;
  }
  return config;
};

const normalizeList = (res: any) => {
  const total = Number(res.headers['x-total-count']) || res.data?.total || res.data?.count || 0;
  const data = Array.isArray(res.data?.data) ? res.data.data : Array.isArray(res.data) ? res.data : [];
  return { data, total };
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const query = mapListQuery({ page, perPage }, params.sort, params.filter);
    const res = await api.get(`/${resource}`, withTenant(resource, { params: query }));
    return normalizeList(res);
  },

  getOne: async (resource, params) => {
    const res = await api.get(`/${resource}/${params.id}`, withTenant(resource));
    return { data: res.data };
  },

  getMany: async (resource, params) => {
    const results = await Promise.all(
      params.ids.map((id) => api.get(`/${resource}/${id}`, withTenant(resource)))
    );
    return { data: results.map((r) => r.data) };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const filter = { ...(params.filter || {}), [params.target]: params.id };
    const query = mapListQuery({ page, perPage }, params.sort, filter);
    const res = await api.get(`/${resource}`, withTenant(resource, { params: query }));
    return normalizeList(res);
  },

  create: async (resource, params) => {
    const res = await api.post(`/${resource}`, params.data, withTenant(resource));
    return { data: res.data };
  },

  update: async (resource, params) => {
    const res = await api.put(`/${resource}/${params.id}`, params.data, withTenant(resource));
    return { data: res.data };
  },

  updateMany: async (resource, params) => {
    const res = await api.put(`/${resource}`, { ids: params.ids, data: params.data }, withTenant(resource));
    return { data: res.data?.ids || params.ids };
  },

  delete: async (resource, params) => {
    const res = await api.delete(`/${resource}/${params.id}`, withTenant(resource));
    return { data: res.data || { id: params.id } };
  },

  deleteMany: async (resource, params) => {
    const res = await api.request(withTenant(resource, { method: 'DELETE', url: `/${resource}`, data: { ids: params.ids } }));
    return { data: res.data?.ids || params.ids };
  }
};
