import { Credentials } from '../@types';
import { LOGIN_URL } from '../config';

async function handleResponse(response: Response) {
  if (!response.ok) {
    throw Error(`Resposne status code: ${response.status}`);
  }
  return await response.json();
}

function handleError(error: Error) {
  console.error('API call failed. ' + error);
  throw error;
}

export async function login(credentials: Credentials) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(handleResponse)
    .catch(handleError);
}
