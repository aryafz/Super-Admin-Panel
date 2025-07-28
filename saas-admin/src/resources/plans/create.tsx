import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  required
} from 'react-admin';

export const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" validate={required()} />
      <TextInput source="name" validate={required()} />
      <NumberInput source="priceCents" />
      <TextInput source="currency" defaultValue="USD" />
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Create>
);
