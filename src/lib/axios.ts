import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_SENS_URL as string;

const TOKEN = "not set" as string;

console.log("TOKEN ====> on every request", TOKEN);

const apiClient = axios.create({
  baseURL: API_ENDPOINT,
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;