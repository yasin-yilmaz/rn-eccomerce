import { TProduct } from "./Product.type";

export type TCartItem = {
  id: string;
  productId: string;
  product: TProduct;
  quantity: number;
  size: string;
  price: number;
};
