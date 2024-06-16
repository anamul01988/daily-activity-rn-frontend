import axios from "axios";
import * as SecureStore from "expo-secure-store"; //should to know deep
// export const BASE_URL = "http://192.168.31.142:1337/";
export const BASE_URL = "http://192.168.0.104:1337/";
const TIME_OUT = 30000;
// export const DAILY_ACTIVITY_TOKEN_NAME = "daily_activity_token";
export const BLOSSOM_TOKEN_NAME = "blossom_user_token";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    // console.log("error in saveToken", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(async (req) => {
  try {
    // const access_token = await SecureStore.getItemAsync(
    //   "DAILY_ACTIVITY_TOKEN_NAME"
    // );
    const access_token = await SecureStore.getItemAsync(BLOSSOM_TOKEN_NAME);
    // console.log("access token for checking", access_token);

    req.headers.Authorization = access_token;
    return req;
  } catch (error) {
    return req;
  }
});

// Interceptor to handle token expiration errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      console.log("logout issuuue===================", error);
      // await logout(); // Log out the user
    }
    return Promise.reject(error);
  }
);
export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
