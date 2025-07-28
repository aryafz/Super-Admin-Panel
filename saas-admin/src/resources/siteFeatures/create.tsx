import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const SiteFeatureCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Create>
);
