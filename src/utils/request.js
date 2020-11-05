import axios from 'axios';

// 参数拼串
function analyzeUrl(url, data) {
  let resultUrl = url;
  if (!data) return resultUrl;
  resultUrl += '?';
  Object.keys(data)
    .forEach((key) => {
      resultUrl += `${key}=${data[key]}&`;
    });
  resultUrl = resultUrl.slice(0, -1);
  return resultUrl;
}

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '',
  timeout: 5000,
});

export default function request({
  url, type = 'get', data,
}) {
  return new Promise((resolve, reject) => {
    let promise;
    let requestUrl;

    if (type.toLowerCase() === 'get') {
      requestUrl = analyzeUrl(url, data);
      promise = instance.get(requestUrl);
    } else if (type === 'post') {
      promise = instance.post(url, data);
    }

    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
