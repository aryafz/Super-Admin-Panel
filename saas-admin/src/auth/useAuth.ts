import { useGetIdentity, usePermissions } from 'react-admin';

export const useAuthInfo = () => {
  const { data: identity } = useGetIdentity();
  const { permissions } = usePermissions();
  return { identity, role: permissions };
};
