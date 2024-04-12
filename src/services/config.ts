import axios from "axios";
import * as SecureStore from "expo-secure-store"; //should to know deep
export const BASE_URL = "http://192.168.0.103:1337/";
const TIME_OUT = 30000;
export const DAILY_ACTIVITY_TOKEN_NAME = "daily_activity_token";
// export const DAILY_ACTIVITY_TOKEN_NAME =
//   "eyJhbGciOiJIUzI1NiIeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZlYTU2MjkxYzc3OGI3M2M3YjZjNjgiLCJpYXQiOjE3MTExODg0NTEsImV4cCI6MTcxMTc5MzI1MX0.t4jdPMgrzOsYJHGUJg8w6ICZzeU3cNS067jP8jZvaDw";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log("error in saveToken", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync(
      "DAILY_ACTIVITY_TOKEN_NAME"
    );
    req.headers.Authorization = access_token;
    return req;
  } catch (error) {
    return req;
  }
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
