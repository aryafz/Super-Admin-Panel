import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  required
} from 'react-admin';

export const SiteThemeEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="themeId" reference="themes" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="isActive" />
    </SimpleForm>
  </Edit>
);
