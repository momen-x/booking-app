export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  userImage: string | null;
  role: "USER" | "ADMIN" | "PROVIDER";
  createdAt: Date;
  updatedAt: Date;
}
