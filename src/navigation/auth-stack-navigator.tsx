import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import WelcomeScreen from "screens/welcome-screen";
import SignInScreen from "screens/sign-in-screen";
import SignUpScreen from "screens/sign-up-screen";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({ initialRouteName }: any) => {
  return (
    <AuthStack.Navigator initialRouteName={initialRouteName}>
      <AuthStack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <AuthStack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
