import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  TextInput,
  TopToolbar,
  CreateButton
} from 'react-admin';

const filters = [<TextInput source="code" label="Code" alwaysOn />];

export const FeatureList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
