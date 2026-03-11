export type JwtPayload = {
  sub: string;
  email: string;
}

export interface JwtPayloadRefresh extends JwtPayload {
  refreshToken: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
  };
}
