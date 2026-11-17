import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { dummyWishlist } from "@/data/dummy";

import { TProduct } from "@/types/Product.type";

export type WishlistContextType = {
  wishlist: TProduct[];
  toggleWishlist: (product: TProduct) => void;
  isInWishlist: (productId: string) => boolean;
  loading: boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: PropsWithChildren) => {
  const [wishlist, setWishlist] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWishList = async () => {
    setLoading(true);
    setWishlist(dummyWishlist);
    setLoading(false);
  };

  const toggleWishlist = async (product: TProduct) => {
    const exists = wishlist.find((p) => p._id === product._id);
    setWishlist((prev) => {
      if (exists) {
        return prev.filter((p) => p._id !== product._id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p._id === productId);
  };

  useEffect(() => {
    fetchWishList();
  }, []);

  const values = {
    wishlist,
    loading,
    toggleWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={values}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWhishList = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("WhishList Context not Provided");
  return context;
};
