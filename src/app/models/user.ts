import { JwtPayload } from 'jwt-decode';

export interface User extends Partial<JwtPayload> {
  sub?: string;
  iss?: string;
  aud?: string | string[];
  exp?: number;
  iat?: number;

  preferred_username?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;

  realm_access?: {
    roles: string[];
  };

  resource_access?: {
    [key: string]: {
      roles: string[];
    };
  };

  roleId?: string;
  role?: { id: number };
  password?: string;
  birthday?: string;
  id?: number;
}
