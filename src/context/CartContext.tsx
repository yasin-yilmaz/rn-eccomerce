import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { dummyCart } from "@/data/dummy";

import { TCartItem } from "@/types/Cart.type";
import { TProduct } from "@/types/Product.type";

type TCartContext = {
  cartItems: TCartItem[];
  cartTotal: number;
  itemTotal: number;

  addToCart: (product: TProduct, size: string) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;

  isLoading: boolean;
};

export const CartContext = createContext<TCartContext | null>(null);

export const CartProdvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const fetchCart = async () => {
    setIsLoading(true);
    const serverCart = dummyCart;
    const mappedItems = serverCart.items.map((item) => ({
      id: item._id,
      productId: item.product._id,
      product: item.product as TProduct,
      quantity: item.quantity,
      size: item.size,
      price: item.price,
    }));
    setCartItems(mappedItems);
    setCartTotal(serverCart.totalAmount);
    setIsLoading(false);
  };

  const addToCart = async (product: TProduct, size: string) => {};

  const removeFromCart = async (itemId: string) => {};

  const updateQuantity = async (itemId: string, quantity: number) => {};

  const clearCart = async () => {};

  const itemTotal = cartItems.reduce((acc, curr) => {
    return (acc += curr.quantity);
  }, 0);

  useEffect(() => {
    fetchCart();
  }, []);

  const values = {
    cartItems,
    isLoading,
    cartTotal,
    itemTotal,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext not provided!");
  return context;
};
