import Button from "@/components/shared/button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useUserGlobalStore from "@/store/useUserGlobalStore";
const ProfileScreen = () => {
  const { updateUser } = useUserGlobalStore();
  // if (isLoadingTasks || !tasks) {

  const navigation = useNavigation();
  const navigateToLogOut = () => {
    updateUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700" ml="3">
            Profile
          </Text>
        </Box>
        <Box height={16} />
        {/* <Pressable onPress={navigateToLogOut}>
          <Text color="primary" textAlign="right">
            Log out?
          </Text>
        </Pressable> */}

        <Button label="Log out" onPress={navigateToLogOut} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
