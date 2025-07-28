import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  required
} from 'react-admin';

export const FeatureEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="code" validate={required()} />
      <TextInput source="name" validate={required()} />
      <TextInput source="description" />
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Edit>
);
