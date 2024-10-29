import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";

// create an axios instance
const REQUEST = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60 * 1000, // ms request timeout
});

// request interceptor
REQUEST.interceptors.request.use(
  (config) => {
    if (hasCookie("client")) {
      const tokenClient = getCookie("client");
      config.headers.Authorization = `Bearer ${tokenClient}`;
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
    // return Promise.resolve(response);

    return {
      success: true,
      data: response.data.data,
      status: response.status,
      message: response.data?.message || "Request successful",
    };
  },
  (error) => {
    // unformatted error data
    const fallbackMessage = "Request failed, please try again";

    const status = error.response?.status || 500;
    const message = error.response?.data?.message || fallbackMessage;
    const validationErrors = error.response?.data?.errors || {};

    console.error("Response error:", error);

    return Promise.reject({
      success: false,
      status,
      message,
      validationErrors,
    });
  }
);

export default REQUEST;
