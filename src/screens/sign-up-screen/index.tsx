import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigations/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Box>
      <Text>Sign up Screen</Text>
      <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />
    </Box>
  );
};

export default SignUpScreen;
