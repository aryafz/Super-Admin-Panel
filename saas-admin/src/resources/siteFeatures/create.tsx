import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  required
} from 'react-admin';

export const SiteFeatureCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="featureId" reference="features" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Create>
);
