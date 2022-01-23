import Table from "@mui/material/Table";
import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { User } from "../types/types";
import UserRow from "./UserRow";
import styles from "./UserTable.module.scss";

interface UserTableProps {
  users: User[];
  filterText: string;
}

function UserTable({ users, filterText }: UserTableProps) {
  const rows = users
    .filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((user) => <UserRow user={user} key={user.id} />);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={styles.tableHeader}>Name</TableCell>
            <TableCell className={styles.tableHeader}>UserName</TableCell>
            <TableCell className={styles.tableHeader} align="right">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        {rows}
      </Table>
    </TableContainer>
  );
}

export default UserTable;
