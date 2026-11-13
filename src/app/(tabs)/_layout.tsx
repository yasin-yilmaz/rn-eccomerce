import { Tabs } from "expo-router";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Feather, Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { TAB_ROUTES } from "@/constants/routes";

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  console.log(insets);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS["primary"],
        tabBarInactiveTintColor: COLORS["secondary"],
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          height: 64 + insets.bottom,
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name={TAB_ROUTES.HOME}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color as string}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={TAB_ROUTES.CART}
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name={focused ? "shopping-cart" : "shopping-cart"}
              color={color as string}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={TAB_ROUTES.FAVORITES}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color as string}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={TAB_ROUTES.PROFILE}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color as string}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
