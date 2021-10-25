import { UserModelDefault } from '../../modules/auth/models/AuthModel';

export interface INIT_AUTH {
  auth: UserModelDefault;
  loading: boolean;
  errorMessage: null | string;
}
const userDefault = {
  user: '', access: '', refresh: '', groups: [], permissions: [],
};
const authStorage = localStorage.getItem('auth');
const {
  user = '', access = '', refresh = '', groups = [], permissions = [],
} = JSON.parse(authStorage || JSON.stringify(userDefault));

export const initialState: INIT_AUTH = {
  auth: {
    user,
    access,
    refresh,
    groups,
    permissions,
  },
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initial: INIT_AUTH, action: any) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initial,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initial,
        auth: action.payload,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...initial,
        auth: userDefault,
      };

    case 'LOGIN_ERROR':
      return {
        ...initial,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
