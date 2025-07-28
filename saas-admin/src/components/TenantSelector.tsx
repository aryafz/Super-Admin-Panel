import { useEffect, useState } from 'react';
import { api } from '../data/httpClient';
import { setTenantSite } from '../data/dataProvider';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const TenantSelector = () => {
  const [sites, setSites] = useState<any[]>([]);
  const [siteId, setSiteId] = useState<string | ''>('');

  useEffect(() => {
    api.get('/sites', { params: { page: 1, limit: 100 } })
       .then((res) => setSites(res.data?.data || res.data || []))
       .catch(() => setSites([]));
  }, []);

  const handleChange = (e: any) => {
    const v = e.target.value as string;
    setSiteId(v);
    setTenantSite(v || null);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 240 }}>
      <InputLabel id="tenant-select-label">سایت (Tenant)</InputLabel>
      <Select labelId="tenant-select-label" value={siteId} label="سایت (Tenant)" onChange={handleChange}>
        <MenuItem value=""><em>بدون انتخاب</em></MenuItem>
        {sites.map((s) => (
          <MenuItem key={s.id} value={s.id}>{s.name} ({s.slug})</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
