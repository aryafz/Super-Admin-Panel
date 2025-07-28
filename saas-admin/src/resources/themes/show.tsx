import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField
} from 'react-admin';

export const ThemeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
