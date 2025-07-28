import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField,
  ReferenceField
} from 'react-admin';

export const SitePlanShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="planId" reference="plans" />
      <BooleanField source="isActive" />
      <DateField source="startsAt" />
      <DateField source="endsAt" />
      <TextField source="status" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
