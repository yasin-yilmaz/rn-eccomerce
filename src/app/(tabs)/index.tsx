// 01:30:11
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { Router } from "expo-router/build/rsc/router/client.js";

import { SafeAreaView } from "react-native-safe-area-context";

import { CATEGORIES } from "@/constants/menu";

import CategoryItem from "@/components/CategoryItem";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { BANNERS, dummyProducts } from "@/data/dummy";

import { TProduct } from "@/types/Product.type";

const HomeScreen = () => {
  const [activeBannerIndex, setactiveBannerIndex] = useState(0);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { width } = useWindowDimensions();

  const bannerWidth = width - 32;

  const categories = [{ id: 0, name: "All", icon: "grid" }, ...CATEGORIES];

  const fetchProducts = async () => {
    setProducts(dummyProducts);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header showCart showMenu showLogo />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6">
          {/* BANNER SLIDER */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            className="h-48 overflow-hidden rounded-xl"
            onScroll={(event) => {
              const currentSlideIndex = Math.ceil(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width,
              );
              if (currentSlideIndex !== activeBannerIndex) {
                setactiveBannerIndex(currentSlideIndex);
              }
            }}
          >
            {BANNERS.map((banner) => (
              <View
                key={banner.id}
                style={{ width: bannerWidth }}
                className="relative h-48 overflow-hidden bg-gray-200"
              >
                <Image
                  source={{ uri: banner.image }}
                  className="absolute inset-0 h-full w-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-4 left-4 z-10 w-full gap-2">
                  <View>
                    <Text className="font-nold text-2xl text-white">
                      {banner.title}
                    </Text>
                    <Text className="text-sm font-medium text-white">
                      {banner.subtitle}
                    </Text>
                  </View>
                  <TouchableOpacity className="self-start rounded-full bg-white px-4 py-2">
                    <Text className="text-xs font-bold text-primary">
                      Get Now
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="absolute inset-0 bg-black/40" />
              </View>
            ))}
          </ScrollView>
          {/* DOTS */}
          <View className="mt-3 flex-row justify-center gap-2">
            {BANNERS.map((banner, index) => (
              <View
                key={banner.id}
                className={`h-2 rounded-full ${index === activeBannerIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"}`}
              />
            ))}
          </View>
        </View>
        <View className="mb-6">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-primary">Categories</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                item={category}
                isSelected={false}
                onPress={() =>
                  router.push({
                    pathname: "/shop",
                    params: {
                      category: category.id === 0 ? "" : category.name,
                    },
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
        {/* POPULAR PRODUCTS */}

        <View className="mb-8">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-primary">Popular</Text>
            <TouchableOpacity onPress={() => router.push("/shop")}>
              <Text className="text-sm text-secondary">See All</Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View className="flex-row flex-wrap justify-between">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </View>
          )}
        </View>

        {/* NEWS LETTER */}
        <View className="mb-20 items-center rounded-2xl bg-gray-100 p-6">
          <Text className="mb-2 text-center text-2xl font-bold text-primary">
            Join the Revolution
          </Text>
          <Text className="mb-4 text-center text-secondary">
            Subscribe to our newsletter and get 10% off your first purchase.
          </Text>
          <TouchableOpacity className="w-4/5 items-center rounded-full bg-primary py-3">
            <Text className="text-base font-medium text-white">
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
