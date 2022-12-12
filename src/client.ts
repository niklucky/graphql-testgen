import { default as axios } from 'axios';
import { getUrl } from './config';

export function post(
  data: any,
  url?: string,
  headers?: Record<string, string>,
) {
  url = url ?? getUrl();
  return request(url, data, 'POST', headers);
}
async function request(
  url: string,
  data: any,
  method: 'POST',
  headers?: Record<string, string>,
) {
  const response = await axios({
    url: url,
    method,
    data,
    headers,
  });
  return response;
}
export default {
  post,
};
