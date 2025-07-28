import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField,
  ReferenceField
} from 'react-admin';

export const SiteThemeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="themeId" reference="themes" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
