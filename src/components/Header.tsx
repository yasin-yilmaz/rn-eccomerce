import { Image, Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";

import LogoImg from "@/assets/images/logo.png";

type Props = {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
  showMenu?: boolean;
  showLogo?: boolean;
};

const Header = ({
  showBack,
  showCart,
  showLogo,
  showMenu,
  showSearch,
  title,
}: Props) => {
  const router = useRouter();

  const { itemCount } = { itemCount: 6 };

  return (
    <View className="app-row-between bg-white px-3 py-4">
      {/* LEFT */}
      <View className="flex-1 flex-row items-center">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS["primary"]} />
          </TouchableOpacity>
        )}
        {showMenu && (
          <TouchableOpacity className="mr-3">
            <Ionicons name="menu-outline" size={28} color={COLORS["primary"]} />
          </TouchableOpacity>
        )}
        {showLogo ? (
          <View className="flex-1">
            <Image
              source={LogoImg}
              style={{ height: 24, width: "100%" }}
              resizeMode="contain"
            />
          </View>
        ) : (
          title && (
            <Text className="text-primary mr-8 flex-1 text-center text-xl font-bold">
              {title}
            </Text>
          )
        )}
        {!title && !showSearch && <View className="" />}
      </View>
      {/* RIGHT */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={24}
              color={COLORS["primary"]}
            />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity onPress={() => router.push("/(tabs)/cart")}>
            <Ionicons name="bag-outline" size={24} color={COLORS["primary"]} />
            <View className="bg-accent absolute -right-1 -top-1 size-4 items-center justify-center rounded-full">
              <Text className="text-xs font-bold text-white">{itemCount}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
