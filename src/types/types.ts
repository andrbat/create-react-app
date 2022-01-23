export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
}
