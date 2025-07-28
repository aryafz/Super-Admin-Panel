import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required
} from 'react-admin';

export const PlanFeatureEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="planId" reference="plans" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="featureId" reference="features" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
