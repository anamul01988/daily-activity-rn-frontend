// import useUserGlobalStore from "@/store/useUserGlobalStore";
// import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";
// import AppStackNavigator from "./app-stack-navigator";
// import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
  // const { user } = useUserGlobalStore();
  const user = true;

  return (
    <NavigationContainer>
      {/* {user ? <AppStackNavigator /> : <AuthStackNavigator />} */}
      {/* <AuthStackNavigator /> */}
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

// rnfes
