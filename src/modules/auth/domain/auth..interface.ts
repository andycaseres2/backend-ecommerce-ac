export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface UserInterface {
  username: string;
  email: string;
  password: string;
  role: Role;
}
