// import { useNavigation } from "@react-navigation/native";
// import { AuthScreenNavigationType } from "navigations/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import React from "react";
// import { Button } from "react-native";
import { Box, Text } from "utils/theme";

const CategoriesScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>CategoriesScreen Screen</Text>
        {/* <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} /> */}
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoriesScreen;
