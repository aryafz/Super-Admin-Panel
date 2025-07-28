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

const filters = [<TextInput source="themeId" label="Theme" alwaysOn />];

export const SiteThemeList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="themeId" reference="themes" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
