import Category from "@/components/categories/category";
import CreateNewList from "@/components/categories/create-new-list";
import Loader from "@/components/shared/loader";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { fetcher } from "@/services/config";
import { ICategory } from "@/types";
import { Box, Text } from "@/utils/theme";
import React from "react";
import { FlatList } from "react-native";
import useSWR from "swr";

const fakeData = [
  {
    color: {
      id: "color_gnrMajjcBmVYeC7076CYT",
      name: "purple500",
      code: "#22c55e",
    },
    icon: {
      id: "icon_vjZRKKL9cC0pdpj1MURnz",
      name: "seed",
      symbol: "🍵",
    },
    _id: "661ca96c0e75bdec09c4b819",
    name: "Entertainment125",
    isEditable: true,
    user: "66194ffd80d56b988a2748f8",
    __v: 0,
  },
  {
    color: {
      id: "color_gnrMajjcBmVYeC7076CYT",
      name: "purple500",
      code: "#22c55e",
    },
    icon: {
      id: "icon_vjZRKKL9cC0pdpj1MURnz",
      name: "seed",
      symbol: "🍵",
    },
    _id: "661ca9860e75bdec09c4b81c",
    name: "Sports 125",
    isEditable: true,
    user: "66194ffd80d56b988a2748f8",
    __v: 0,
  },
];

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategory[]>(
    "categories/", //endpoints  ar fetcher function call dewa hoice
    fetcher,
    {
      refreshInterval: 1000, //page a ashar 1s por hooc call hobe
    }
  );
  // console.log("categories dataa", data, isLoading, error);

  if (isLoading) {
    return <Loader />;
  }

  const renderItem = ({ item }: { item: ICategory }) => (
    <Category category={item} />
  );

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text variant="textXl" fontWeight="700" mb="10" py="4">
          Categories
        </Text>
        <FlatList
          data={data ?? fakeData}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
        <CreateNewList />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoriesScreen;
