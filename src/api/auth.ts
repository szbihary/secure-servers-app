import Cookies from 'js-cookie';
import { Credentials } from '../@types';
import { LOGIN_URL, SESSION_COOKIE_NAME } from '../config';

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw Error(`Resposne status code: ${response.status}`);
  }
  return await response.json();
};

function handleError(error: Error) {
  console.error('API call failed. ' + error);
  throw error;
}

export const login = async (credentials: Credentials) => {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const logout = () => {
  Cookies.remove(SESSION_COOKIE_NAME);
};
