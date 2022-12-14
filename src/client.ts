/* eslint-disable @typescript-eslint/no-explicit-any */
import { default as axios } from 'axios';
import { getUrl } from './config';

export function post(
  data: any,
  url?: string,
  headers?: Record<string, string>
) {
  url = url ?? getUrl();

  return request(url, data, 'post', headers);
}
async function request(
  url: string,
  data: any,
  method: 'post',
  headers?: Record<string, string>
) {
  return axios({
    url,
    method,
    data,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}
export default {
  post,
};
