import React from "react";
import UserTable from "./UserTable";
import SearchBar from "./SearchBar";
import { User } from "../types/types";

function App() {
  const [filterText, setFilter] = React.useState("");
  const [users, setUser] = React.useState<User[]>([]);

  React.useEffect(() => {
    getUsers(url)
      .then((u) => setUser(u))
      .catch((error) => console.log("Request failed", error));
  }, []);

  return (
    <div className="main-users">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={(e) => setFilter(e)}
      />
      <UserTable users={users} filterText={filterText} />
    </div>
  );
}

const url = "https://jsonplaceholder.typicode.com/users";

function generateUserList(users: User[]) {
  return users.map((u: User) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
  }));
}

async function getUsers(url: string) {
  const r = await fetch(url);
  const users = await r.json();
  return generateUserList(users);
}

export default App;
