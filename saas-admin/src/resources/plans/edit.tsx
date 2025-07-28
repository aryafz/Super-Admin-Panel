import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  required
} from 'react-admin';

export const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="code" validate={required()} />
      <TextInput source="name" validate={required()} />
      <NumberInput source="priceCents" />
      <TextInput source="currency" />
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Edit>
);
