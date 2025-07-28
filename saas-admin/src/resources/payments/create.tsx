import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  SelectInput,
  required
} from 'react-admin';

export const PaymentCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="amountCents" validate={required()} />
      <TextInput source="currency" defaultValue="USD" />
      <SelectInput
        source="status"
        choices={[
          { id: 'pending', name: 'pending' },
          { id: 'paid', name: 'paid' },
          { id: 'failed', name: 'failed' },
          { id: 'refunded', name: 'refunded' }
        ]}
        defaultValue="pending"
      />
      <TextInput source="externalId" />
      <TextInput source="invoiceNo" />
    </SimpleForm>
  </Create>
);
