import Cookies from 'js-cookie';
import { Credentials } from '../@types';
import { LOGIN_URL, SESSION_COOKIE_NAME } from '../config';
import http from './http';

export const login = async (credentials: Credentials) => {
  return http.post(LOGIN_URL, credentials);
};

export const logout = () => {
  Cookies.remove(SESSION_COOKIE_NAME);
};
