import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from '../data/httpClient';

export const Dashboard = () => {
  const [stats, setStats] = useState<any>({ users: 0, sites: 0, payments: 0 });

  useEffect(() => {
    Promise.all([
      api.get('/users', { params: { page: 1, limit: 1 } }),
      api.get('/sites', { params: { page: 1, limit: 1 } }),
      api.get('/payments', { params: { page: 1, limit: 1 } }).catch(() => ({ data: { total: 0 } }))
    ]).then(([u, s, p]) => {
      const tu = u.data?.total ?? (u as any).headers['x-total-count'] ?? 0;
      const ts = s.data?.total ?? (s as any).headers['x-total-count'] ?? 0;
      const tp = (p as any).data?.total ?? (p as any).headers?.['x-total-count'] ?? 0;
      setStats({ users: Number(tu), sites: Number(ts), payments: Number(tp) });
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {[
        { label: 'Users', value: stats.users },
        { label: 'Sites', value: stats.sites },
        { label: 'Payments', value: stats.payments }
      ].map((c) => (
        <Grid item xs={12} md={4} key={c.label}>
          <Card><CardContent>
            <Typography variant="h6">{c.label}</Typography>
            <Typography variant="h4">{c.value}</Typography>
          </CardContent></Card>
        </Grid>
      ))}
    </Grid>
  );
};
