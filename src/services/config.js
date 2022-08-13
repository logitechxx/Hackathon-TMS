/* eslint-disable no-alert */
import axios from 'axios';
import { getToken } from '../utils';

const isToken = getToken();

axios.interceptors.request.use(
  (config) => {
    if (isToken) {
      config.headers.Authorization = `Token ${isToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (isToken) localStorage.removeItem('token');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export const handleNetworkError = (error) => {
  if (error.message === 'Network request failed') {
    alert(
      'Kesalahan Jaringan',
      'Silakan periksa koneksi Anda dan coba kembali.',
      'iconNoInet'
    );
  }
  throw error;
};

export const handleCommonError = (error) => {
  if (error && error.data.msg === 'invalid token') {
    alert(
      'Session kamu telah habis',
      'Silakan login kembali dengan akun kamu yg telah terdaftar'
    );
    throw new Error({
      logout: true
    });
  } else {
    throw error;
  }
};

const post =
  (api) =>
  (data, params, timemout = true) => {
    return axios.post(
      api,
      data,
      {
        method: 'POST',
        params
      },
      timemout
    );
  };

const postWithoutHeader =
  (api) =>
  (data, timemout = true) => {
    return axios.post(
      api,
      data,
      {
        method: 'POST'
      },
      timemout
    );
  };

const putWithSlug =
  (api) =>
  (slug, data, timemout = true) => {
    return axios.patch(
      `${api}${slug}/`,
      data,
      {
        method: 'POST',
      },
      timemout
    );
  };

const put =
  (api) =>
  (data, timemout = true) => {
    return axios.put(
      api,
      data,
      {
        method: 'POST',
      },
      timemout
    );
  };

const get =
  (api) =>
  (params, timemout = true) => {
    return axios(
      api,
      {
        method: 'GET',
        params
      },
      { handleNetworkError, handleCommonError },
      timemout
    );
  };

export {
  postWithoutHeader,
  post,
  get,
  put,
  putWithSlug,
};