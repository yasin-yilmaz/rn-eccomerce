import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "@/styles/global.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { CartProdvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WhishListContext";

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <CartProdvider>
          <WishlistProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </WishlistProvider>
        </CartProdvider>
      </GestureHandlerRootView>
    </>
  );
}
