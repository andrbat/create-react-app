import React from 'react';
import UserTable from './UserTable';
import SearchBar from './SearchBar';
import { UserProps } from '../types/types';

function App() {
  const [filterText, setFilter] = React.useState('');
  const [users, setUser] = React.useState<UserProps[]>([]);

  React.useEffect(() => {
      getUsers(url)
          .then(u => setUser(u))
          .catch(error => console.log('Request failed', error));
  }, []);

  return (
      <div>
          <SearchBar
              filterText={filterText}
              onFilterTextChange={(e) => setFilter(e)}
          />
          <UserTable
              users={users}
              filterText={filterText}
          />
      </div>
  );
};

const url = 'https://jsonplaceholder.typicode.com/users';

function generateUserList(users: UserProps[]) {
  return users.map((u: UserProps) => ({ 'id': u.id, 'name': u.name, 'username': u.username, 'email': u.email }));
}

function getUsers(url:string) {
  return fetch(url)
      .then(r => r.json())
      .then(generateUserList);
};

export default App;