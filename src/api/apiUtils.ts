export class HttpError extends Error {
  status;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
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
