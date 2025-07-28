export type RaPagination = { page: number; perPage: number };
export type RaSort = { field: string; order: 'ASC' | 'DESC' };
export type RaFilter = Record<string, any>;

export const mapListQuery = (pagination: RaPagination, sort?: RaSort, filter?: RaFilter) => {
  const params: any = { page: pagination.page, limit: pagination.perPage };
  if (sort?.field) {
    params.sort = `${sort.field},${(sort.order || 'ASC').toLowerCase()}`;
  }
  if (filter) {
    Object.entries(filter).forEach(([k, v]) => {
      params[`filter[${k}]`] = v;
    });
  }
  return params;
};
