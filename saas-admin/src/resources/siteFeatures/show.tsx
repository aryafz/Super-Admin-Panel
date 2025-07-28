import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField,
  ReferenceField
} from 'react-admin';

export const SiteFeatureShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="featureId" reference="features" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
