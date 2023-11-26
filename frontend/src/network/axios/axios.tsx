/**
 * Axios is a simple promise based HTTP client for the browser and node.js.
 * Axios provides a simple to use library in a small package with a very extensible interface.
 * @url https://axios-http.com/
 * */

import axios from "axios";

// Import constants, functions and services
const ENV_IMPORT = import.meta.env;

axios.defaults.baseURL = ENV_IMPORT.VITE_BACKENDAPI_URL_SETUP;

axios.interceptors.request.use(function (config: any) {
  const token = sessionStorage.getItem("expense-access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor
axios.interceptors.response.use(
  (response: any) => {
    // Handle successful response
    return response;
  },
  (error: any) => {
    //log error

    return Promise.reject(error);
  }
);

/**
 * Clear all failed queues
 * @param error Error
 * @param token Access Token
 * */

// Send a GET request (SetupGroup Port)
const getSetupServices = (url: string, data = null) => {
  return new Promise(function (resolve, reject) {
    axios.defaults.baseURL = ENV_IMPORT.VITE_BACKENDAPI_URL_SETUP;
    const token = sessionStorage.getItem("expense-access-token");

    console.log(token, "token");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(url, { headers: headers, params: data ? data : {} })
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};


const postSetupServiceToken = (url: string, data: any) => {
  return new Promise(function (resolve, reject) {
    axios.defaults.baseURL = ENV_IMPORT.VITE_BACKENDAPI_URL_SETUP;

    const token = sessionStorage.getItem("expense-access-token");

    console.log(token, "token");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios
      .post(url, data, { headers })
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

// Send a POST request (User Service Port)
const postUserService = (url: string, data: any) => {
  return new Promise(function (resolve, reject) {
    axios.defaults.baseURL = ENV_IMPORT.VITE_BACKENDAPI_URL_SETUP;
    axios
      .post(url, data)
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};


// Send a DELETE request
const deleteService = (url: string) => {
  return new Promise(function (resolve, reject) {
    const token = sessionStorage.getItem("expense-access-token");

    console.log(token, "token");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios
      .delete(url, { headers })
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};


export const axiosService = {
  postUserService,
  getSetupServices,
  postSetupServiceToken,
  deleteService,
};
