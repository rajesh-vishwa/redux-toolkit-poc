import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const errorHandler = (error: any) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Error INTERCEPTOR Called", error);
    alert("An unexpected error occurred.");
  }
  return Promise.reject({ ...error });
};

const successHandler = (response: AxiosResponse<any>) => {
  return response;
};

apiClient.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default {
  get: apiClient.get,
  post: apiClient.post,
};
