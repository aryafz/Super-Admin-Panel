import { List, Datagrid, TextField, DateField, TextInput, TopToolbar, CreateButton } from 'react-admin';

const filters = [<TextInput source="name" label="Name" alwaysOn />];

export const SiteThemeList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
