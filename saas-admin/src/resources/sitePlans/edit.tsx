import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateInput,
  TextInput,
  required
} from 'react-admin';

export const SitePlanEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="planId" reference="plans" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
      <DateInput source="startsAt" />
      <DateInput source="endsAt" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);
