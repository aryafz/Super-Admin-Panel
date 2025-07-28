import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required
} from 'react-admin';

export const PlanFeatureCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="planId" reference="plans" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="featureId" reference="features" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
