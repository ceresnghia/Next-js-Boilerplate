import axios from 'axios';

import { baseAPIUrl } from '@/utils/AppConfig';

const axiosClientInstance = axios.create({
  baseURL: new URL(baseAPIUrl).toString(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'vi',
  },
});

export default axiosClientInstance;
