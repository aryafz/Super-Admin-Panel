import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const SiteEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);
