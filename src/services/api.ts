import { IUser } from "@/types";
import axiosInstance, { DAILY_ACTIVITY_TOKEN_NAME, saveToken } from "./config";

type RegisterUserTypes = IUser;
// export const registerUser = async ({
//   email,
//   name,
//   password,
// }: RegisterUserTypes) => {
//   try {
//     console.log(
//       "whait is the problem ===================",
//       email,
//       password,
//       name
//     );

//     const response = await fetch("http://192.168.0.103:1337/users/create", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json", // I added this line
//       },

//       body: JSON.stringify({
//         email,
//         password,
//         name,
//       }),
//     });
//     console.log("response-------------------", response);
//     if (!response.ok) {
//       // Handle non-successful response
//       const errorMessage = await response.text();
//       throw new Error(
//         `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
//       );
//     }

//     const responseData = await response.json();
//     return responseData.user;
//   } catch (error) {
//     console.log("error in registerUser", error);
//     throw error;
//   }
// };

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    console.log(
      "whait is the problem ===================",
      email,
      password,
      name
    );
    // baseUrl : //localhost:1337/
  const response = await axiosInstance.post("/users/create", {
      email,
      password,
      name,
    });
    return response.data.user;
  } catch (error) {
    console.log("error in registerUser", error);
    throw error;
  }
};

type LoginUserTypes = Omit<IUser, "name">;

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(DAILY_ACTIVITY_TOKEN_NAME, _token);
    return response.data.user;
  } catch (error) {
    console.log("error in loginUser", error);
    throw error;
  }
};
