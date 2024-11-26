import axios from "axios";
import { getSession } from "./session";

// create an axios instance
const REQUEST = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60 * 1000, // ms request timeout
});

// request interceptor
REQUEST.interceptors.request.use(
  (config) => {
    const token = getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // console.error("interceptors request error", error);
    Promise.reject(error);
  }
);

// response interceptor
REQUEST.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    // unformatted error data
    const fallbackMessage = "Request failed, please try again";

    const status = error.response?.status || 500;
    const message = error.response?.data?.message || fallbackMessage;
    const validationErrors = error.response?.data?.errors || {};

    // console.error("Response error:", error);

    return Promise.reject({
      success: false,
      status,
      message,
      validationErrors,
    });
  }
);

export default REQUEST;
