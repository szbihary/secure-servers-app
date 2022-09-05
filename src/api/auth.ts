import Cookies from 'js-cookie';
import { Credentials } from '../@types';
import { LOGIN_URL, SESSION_COOKIE_NAME } from '../config';
import { handleError, handleResponse } from './apiUtils';

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
