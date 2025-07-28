import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const SiteThemeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);
