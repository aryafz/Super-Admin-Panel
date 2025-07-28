import { Admin, Resource } from 'react-admin'
import authProvider from './auth/authProvider'
import dataProvider from './data/dataProvider'
import { UserList, UserCreate, UserEdit, UserShow } from './resources/users'

export default function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} />
    </Admin>
  )
}
