import { Role, UserInterface } from "./auth..interface";

export class UserEntity implements UserInterface {
  constructor(username: string, email: string, password: string, role: Role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
  username: string;
  email: string;
  password: string;
  role: Role;
}
