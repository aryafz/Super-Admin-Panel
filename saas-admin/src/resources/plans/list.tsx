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

export const PlanList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <TextField source="priceCents" />
      <TextField source="currency" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
