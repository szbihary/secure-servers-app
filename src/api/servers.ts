import Cookies from 'js-cookie';
import { FETCH_SERVER_LIST_URL, SESSION_COOKIE_NAME } from '../config';
import http from './apiUtils';

export const fetchServers = async () => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  if (token) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };
    return http.get(FETCH_SERVER_LIST_URL, { headers });
  } else {
    return Promise.reject('Unauthorized');
  }
};
