import {
  List,
  Datagrid,
  TextField,
  DateField,
  TopToolbar,
  CreateButton,
  ReferenceField,
  TextInput
} from 'react-admin';

const filters = [<TextInput source="planId" label="Plan" alwaysOn />];

export const PlanFeatureList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="planId" reference="plans" />
      <ReferenceField source="featureId" reference="features" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
