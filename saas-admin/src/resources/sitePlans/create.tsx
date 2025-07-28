import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateInput,
  required
} from 'react-admin';

export const SitePlanCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="planId" reference="plans" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
      <DateInput source="startsAt" />
      <DateInput source="endsAt" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);
