import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';

export const PaymentShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="amountCents" />
      <TextField source="currency" />
      <TextField source="status" />
      <TextField source="externalId" />
      <TextField source="invoiceNo" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
