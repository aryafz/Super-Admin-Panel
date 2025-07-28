import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  TextInput,
  TopToolbar,
  CreateButton,
  ReferenceField
} from 'react-admin';

const filters = [<TextInput source="status" label="Status" alwaysOn />];

export const SitePlanList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="planId" reference="plans" />
      <BooleanField source="isActive" />
      <DateField source="startsAt" />
      <DateField source="endsAt" />
      <TextField source="status" />
    </Datagrid>
  </List>
);
