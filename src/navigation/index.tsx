import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";
import useUserGlobalStore from "@/store/useUserGlobalStore";

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  const { user } = useUserGlobalStore();
  const [initialRouteName, setInitialRouteName] = useState("Welcome");

  useEffect(() => {
    if (!user) {
      setInitialRouteName("SignIn");
    }
  }, [user]);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <RootStack.Screen name="AppStack" component={AppStackNavigator} />
        ) : (
          <RootStack.Screen name="AuthStack">
            {() => <AuthStackNavigator initialRouteName={initialRouteName} />}
          </RootStack.Screen>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
