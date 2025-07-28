import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField
} from 'react-admin';

export const FeatureShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
