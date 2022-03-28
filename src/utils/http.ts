import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

import axiosClient from '@/api/axiosClient';

const handlerRequest = (promise: AxiosPromise) => {
  return promise
    .then(({ data }: AxiosResponse) => [undefined, data])
    .catch((error: AxiosError) => [error, undefined]);
};

const post = (apiEndpoint: string, data: any) => {
  return handlerRequest(axiosClient.post(apiEndpoint, data));
};

const put = (apiEndpoint: string, data: any) => {
  return handlerRequest(axiosClient.put(apiEndpoint, data));
};

const get = (apiEndpoint: string) => {
  return handlerRequest(axiosClient.get(apiEndpoint));
};

const destroy = (apiEndpoint: string) => {
  return handlerRequest(axiosClient.delete(apiEndpoint));
};

const http = {
  post,
  put,
  get,
  destroy,
};

export default http;
