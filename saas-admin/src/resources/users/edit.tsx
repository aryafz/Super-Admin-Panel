import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin'

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="email" />
      <SelectInput source="role" choices={[
        { id: 'super_admin', name: 'super_admin' },
        { id: 'site_owner', name: 'site_owner' },
        { id: 'operator', name: 'operator' },
        { id: 'user', name: 'user' },
      ]} />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Edit>
)
