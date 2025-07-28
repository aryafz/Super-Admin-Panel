import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ReferenceField
} from 'react-admin';

export const SiteShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <ReferenceField source="ownerId" reference="users" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
