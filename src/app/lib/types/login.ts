export type LoginData = {
  email: string;
  password: string;
}

export type token = {
  access_token: string;
}

export type profile = {
  sub: string;
  username: string;
  firstName: string;
  lastName: string;
  tags: string[];
  iat: number;
  exp: number;
}