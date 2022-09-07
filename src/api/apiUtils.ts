export class HttpError extends Error {
  status;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  getErrorMessage() {
    return 'Something went wrong: ' + this.message;
  }
}

export const throwErrorIfResponseIsNotOk = async (res: Response) => {
  if (!res.ok) {
    const err = new HttpError(res.status, res.statusText);
    throw err;
  } else {
    return res;
  }
};

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
