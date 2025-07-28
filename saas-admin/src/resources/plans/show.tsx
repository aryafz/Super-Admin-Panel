import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField
} from 'react-admin';

export const PlanShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <TextField source="priceCents" />
      <TextField source="currency" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
