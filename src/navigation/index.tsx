// import useUserGlobalStore from "@/store/useUserGlobalStore";
// import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
// import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";
import useUserGlobalStore from "@/store/useUserGlobalStore";
import AuthStackNavigator from "./auth-stack-navigator";
// import AppStackNavigator from "./app-stack-navigator";
// import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();
  // console.log(`user`, JSON.stringify(user, null, 2));
  // useEffect(() => {
  //   // updateUser({
  //   //   email: "anam@gmail.com",
  //   //   name: "anamul",
  //   // });
  //   updateUser(null);
  // }, []);
  console.log("user for navigation===============", user);
  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
      {/* <AuthStackNavigator /> */}
      {/* <AppStackNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;

// rnfes
