import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "navigations/types";
import React from "react";
import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      {/* {" "} => aigula thakle error dibe ==================== to be noted */}
      <Box>
        <Text>Sign in Screen</Text>
        <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
