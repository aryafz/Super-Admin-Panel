import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required
} from 'react-admin';

export const SiteEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="slug" validate={required()} />
      <ReferenceInput source="ownerId" reference="users" validate={required()}>
        <SelectInput optionText="email" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
