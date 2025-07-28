import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const FeatureCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Create>
);
