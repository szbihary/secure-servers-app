import { throwErrorIfResponseIsNotOk } from './apiUtils';

const http = {
  get: (url: string, options = {}) =>
    fetch(url, {
      method: 'GET',
      ...options,
    })
      .then(throwErrorIfResponseIsNotOk)
      .then((res) => res.json()),

  post: (url: string, { ...params }, options = {}) =>
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
      },
      ...options,
    })
      .then(throwErrorIfResponseIsNotOk)
      .then((res) => res.json()),
};

export default http;
