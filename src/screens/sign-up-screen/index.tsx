import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
// import { AuthScreenNavigationType } from "@/navigation/types";
import { registerUser } from "@/services/api";
import { IUser } from "@/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data;
      /**
       * register user
       */
      await registerUser({
        email,
        name,
        password,
      });
      navigateToSignInScreen();
    } catch (error) {}
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" mt={"13"}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Blossom!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey starts here
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
              error={errors.name}
            />
          )}
          name="name"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignInScreen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Register" onPress={handleSubmit(onSubmit)} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

// import Button from "@/components/shared/button";
// import Input from "@/components/shared/input";
// import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
// import { useNavigation } from "@react-navigation/native";
// import { AuthScreenNavigationType } from "navigations/types";
// import React from "react";
// import { Pressable } from "react-native";
// import { Box, Text } from "utils/theme";

// const SignUpScreen = () => {
//   const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
//   const navigateToSignInScreen = () => {
//     navigation.navigate("SignIn");
//   };
//   return (
//     <SafeAreaWrapper>
//       <Box flex={1} px="5.5" mt="13">
//         <Text variant="textXl" fontWeight="700">
//           Welcome to Daily Activity app!
//         </Text>
//         <Text variant="textXl" fontWeight="700" mb="6">
//           Your journey starts here
//         </Text>

//         <Input label="Name" />
//         <Box mb="6" />
//         <Input label="Email" />
//         <Box mb="6" />
//         <Input label="Password" />
//         <Box mt="5.5" />
//         <Pressable onPress={navigateToSignInScreen}>
//           <Text color="primary" textAlign="right">
//             Log in?
//           </Text>
//         </Pressable>
//         <Box mb="5.5" />
//         <Button label="Register" onPress={navigateToSignInScreen} uppercase />
//       </Box>
//     </SafeAreaWrapper>
//   );
// };

// export default SignUpScreen;
