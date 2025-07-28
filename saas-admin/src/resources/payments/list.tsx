import {
  List,
  Datagrid,
  TextField,
  DateField,
  TextInput,
  TopToolbar,
  CreateButton
} from 'react-admin';

const filters = [<TextInput source="externalId" label="External ID" alwaysOn />];

export const PaymentList = () => (
  <List filters={filters} actions={<TopToolbar><CreateButton /></TopToolbar>}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="amountCents" />
      <TextField source="currency" />
      <TextField source="status" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
