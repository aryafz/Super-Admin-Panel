import {
  List,
  Datagrid,
  TextField,
  DateField,
  TextInput,
  TopToolbar,
  CreateButton,
  ReferenceField
} from 'react-admin';

const filters = [<TextInput source="name" label="Name" alwaysOn />];

export const SiteList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <ReferenceField source="ownerId" reference="users" link={false} />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
