import axios from "axios";
import AppConfig from './../config/AppConfig';



const HttpClient = axios.create({
  baseURL: 'https://imdb-api.com/tr/API/',
  headers: {
    "Content-type": "application/json"
  },

});

HttpClient.interceptors.request.use(function (config) {
  if (config.url?.includes('@token@')) {
    config.url = config.url?.replace('@token@',AppConfig.IMDB_API_KEY);
  } else {
    config.url = config.url + '/' + AppConfig.IMDB_API_KEY;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


HttpClient.interceptors.response.use(function (response) {
  if(response.data.errorMessage != null && response.data.errorMessage != ''){
    return Promise.reject('Hata oluştu : ' + response.data.errorMessage);
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default HttpClient;