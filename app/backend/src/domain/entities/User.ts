class User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.id = '';
    this.email = '';
    this.password = '';
    this.role = '';
    this.username = '';
  }
}

export interface IDecode {
  id: number,
  iat: number,
  exp: number,
}

export interface IRole {
  role: string | void;
}

export default User;
