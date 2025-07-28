import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  required
} from 'react-admin';

export const SiteThemeCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="themeId" reference="themes" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Create>
);
