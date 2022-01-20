import { UserProps } from "../types/types";

interface IUser {
    user: UserProps;
}

function UserRow({ user }: IUser) {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
    );
  };

  export default UserRow;