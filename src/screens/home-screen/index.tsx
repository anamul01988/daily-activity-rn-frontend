import Loader from "@/components/shared/loader";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Task from "@/components/tasks/task";
import TaskActions from "@/components/tasks/task-actions";
import { fetcher } from "@/services/config";
import useUserGlobalStore from "@/store/useUserGlobalStore";
import { ICategory, ITask } from "@/types";
import { getGreeting } from "@/utils/helpers";
import { Box, Text } from "@/utils/theme";
import { format } from "date-fns";
import React from "react";
import { FlatList } from "react-native";

import useSWR from "swr";

const today = new Date();

const greeting = getGreeting({ hour: new Date().getHours() });

const HomeScreen = () => {
  const { user, logout } = useUserGlobalStore();

  const {
    data: tasks,
    isLoading,
    error,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("tasks/", fetcher);
  if (error) {
    if (error.response) {
      // Server responded with an error
      if (error.response.status === 401) {
        // Token expired
        console.log("Token expired, navigate to login page");
        // logout();
        // Redirect to login page or show login modal
      } else {
        console.error("Server error:", error.response.data);
        // Handle other server errors
      }
    } else if (error.request) {
      // Request made but no response received
      console.error("Network error:", error.request);
      // Handle network errors
    } else {
      // Other errors
      console.error("Error:", error.message);
      // Handle other errors
    }
  }
  if (isLoading || !tasks) {
    // return <Loader />;
  }
  console.log("user & isLoading", user, isLoading);
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Text variant="textXl" fontWeight="500">
          Good {greeting} {user?.name}
        </Text>
        <Text variant="textXl" fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - {tasks?.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
