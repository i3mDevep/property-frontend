export interface AuthModel {
  accessToken: string;
  refreshToken?: string;
}

export interface UserModelDefault {
  access: string;
  refresh: string;
  permissions: string[];
  groups: string[];
  user: string;
}