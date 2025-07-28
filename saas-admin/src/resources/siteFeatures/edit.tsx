import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  required
} from 'react-admin';

export const SiteFeatureEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="featureId" reference="features" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Edit>
);
