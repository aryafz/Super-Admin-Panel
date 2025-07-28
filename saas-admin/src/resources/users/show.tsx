import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin'

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="role" />
      <TextField source="firstName" />
      <TextField source="lastName" />
    </SimpleShowLayout>
  </Show>
)
