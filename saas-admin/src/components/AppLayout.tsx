import { Layout, AppBar, TitlePortal } from 'react-admin';
import { Box, Toolbar, Typography } from '@mui/material';
import { TenantSelector } from './TenantSelector';

const CustomAppBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ width: '100%', display: 'flex', gap: 2, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TitlePortal />
          <Typography variant="h6">Uper Admin Panel</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TenantSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export const AppLayout = (props: any) => <Layout {...props} appBar={CustomAppBar} />;
