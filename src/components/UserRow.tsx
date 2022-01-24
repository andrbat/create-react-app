import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Table,
  TableBody,
} from "@mui/material";
import React from "react";
import { Post, User } from "../types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface IUser {
  user: User;
}

interface GetUserPostsProps {
  idUser: string;
}

function GetUserPosts({ idUser }: GetUserPostsProps) {
  const [posts, setPost] = React.useState<Post[]>([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`)
      .then((res) => res.json())
      .then((result) => {
        setPost(result);
      })
      .catch((error) => console.log("Request failed", error));
  }, [idUser]);

  const rows = posts.map((row) => (
    <TableBody>
      <TableRow>
        <TableCell sx={{ fontWeight: 700 }}>{row.title}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{row.body}</TableCell>
      </TableRow>
    </TableBody>
  ));

  return <>{rows}</>;
}

function UserRow({ user }: IUser) {
  const [open, setOpen] = React.useState(false);
  return (
    <TableBody>
      <TableRow hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <GetUserPosts key={user.id} idUser={user.id} />
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default UserRow;
