import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const PaymentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);
