export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw Error(`Resposne status code: ${response.status}`);
  }
  return await response.json();
};

export const handleError = (error: Error) => {
  console.error('API call failed. ' + error);
  throw error;
};
