import { API_COPROPERTY } from '../../../setup/axios/config';

export async function loginUser(dispatch: any, loginPayload: any): Promise<any> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const response = await fetch(`${API_COPROPERTY}token/`, requestOptions);
    const data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('auth', JSON.stringify(data));
      return Promise.resolve(data);
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return Promise.reject(data.errors[0]);
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error });
    return Promise.reject(error);
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('auth');
}
