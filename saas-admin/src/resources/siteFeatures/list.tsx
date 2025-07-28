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

const filters = [<TextInput source="featureId" label="Feature" alwaysOn />];

export const SiteFeatureList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="featureId" reference="features" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
