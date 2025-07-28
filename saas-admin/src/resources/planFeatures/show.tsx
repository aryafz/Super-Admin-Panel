import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';

export const PlanFeatureShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
