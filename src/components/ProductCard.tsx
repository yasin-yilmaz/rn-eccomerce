import { Image, Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";

import { TProduct } from "@/types/Product.type";

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const isLiked = true;

  const { isFeatured } = product;

  return (
    <Link href={`/product/${product._id}`} asChild>
      <TouchableOpacity className="mb-4 w-[48%] overflow-hidden rounded-lg bg-white">
        <View className="relative h-56 w-full bg-gray-100">
          <Image
            source={{ uri: product.images[0] }}
            className="h-full w-full"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="elevation-4 absolute right-2 top-2 z-10 rounded-full bg-white p-2"
            style={{ elevation: 2, shadowColor: "red" }}
            onPress={(e) => {
              e.stopPropagation();
            }}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={20}
              color={isLiked ? COLORS["accent"] : COLORS["primary"]}
            />
          </TouchableOpacity>

          {/* FEATURED */}
          {isFeatured && (
            <View className="absolute left-2 top-2 rounded bg-black px-2 py-1">
              <Text className="text-xs font-bold uppercase tracking-wide text-white">
                Featured
              </Text>
            </View>
          )}

          {/* INFO */}
        </View>
        <View className="p-3">
          <View className="mb-1 flex-row items-center gap-1">
            <Ionicons name="star" size={14} color="#ffd700" />
            <Text className="text-xs text-secondary">4.5</Text>
          </View>
          <Text numberOfLines={1} className="text-sm font-medium text-primary">
            {product.name}
          </Text>
          <View className="flex-row items-center">
            <Text className="text-base font-bold text-primary">
              ${product.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductCard;
