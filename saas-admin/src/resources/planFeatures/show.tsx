import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  DateField
} from 'react-admin';

export const PlanFeatureShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="planId" reference="plans" />
      <ReferenceField source="featureId" reference="features" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
