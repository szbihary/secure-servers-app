import Cookies from 'js-cookie';
import { FETCH_SERVER_LIST_URL, SESSION_COOKIE_NAME } from '../config';
import { handleError, handleResponse } from './apiUtils';

export const fetchServers = async () => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  if (token) {
    return fetch(FETCH_SERVER_LIST_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(handleResponse)
      .catch(handleError);
  } else {
    return Promise.reject('Not authorized');
  }
};
