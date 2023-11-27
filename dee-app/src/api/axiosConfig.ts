import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../configs/index';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
const http = new Http().instance;
export default http;
