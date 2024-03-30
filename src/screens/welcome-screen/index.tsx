import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigations/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Welcome Screen</Text>
      <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />
      <Button title="Navigate to sign Up" onPress={navigateToSignUpScreen} />
    </Box>
  );
};

export default WelcomeScreen;
