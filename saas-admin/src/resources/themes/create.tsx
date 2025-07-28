import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  required
} from 'react-admin';

export const ThemeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" validate={required()} />
      <TextInput source="name" validate={required()} />
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Create>
);
