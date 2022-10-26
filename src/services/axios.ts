import axios from "axios";

import { apiConfigs } from "src/configs/axiosConfigs";

const client = axios.create(apiConfigs);

// Request interceptor
client.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

// Response interceptor
client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default client;
