import { UserProps } from "../types/types";
import UserRow from "./UserRow";

interface UserTableProps {
    users: UserProps[],
    filterText: string
}

function UserTable({users, filterText}: UserTableProps) {
    const rows = users
        .filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
        .map(user => <UserRow user={user} key={user.id} />);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
  };

  export default UserTable;