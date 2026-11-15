import React, { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { TCategoryItem } from "@/constants/menu";

type TIoniconsName = ComponentProps<typeof Ionicons>["name"];

type Props = {
  item: TCategoryItem;
  isSelected: boolean;
  onPress: () => void;
};

const CategoryItem = ({ item, onPress, isSelected = false }: Props) => {
  return (
    <TouchableOpacity className="mr-4 items-center" onPress={onPress}>
      <View
        className={`mb-2 size-14 items-center justify-center rounded-full ${isSelected ? "bg-primary" : "bg-surface"}`}
      >
        <Ionicons
          name={item.icon as TIoniconsName}
          size={24}
          color={isSelected ? "#fff" : COLORS["primary"]}
        />
        <Text
          className={`text-xs font-medium ${isSelected ? "text-primary" : "text-secondary"}`}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
