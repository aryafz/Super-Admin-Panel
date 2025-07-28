import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  required
} from 'react-admin';

export const ThemeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="code" validate={required()} />
      <TextInput source="name" validate={required()} />
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Edit>
);
