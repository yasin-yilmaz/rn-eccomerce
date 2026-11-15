export interface TProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  sizes?: string[];
  category:
    | {
        _id: string;
        name: string;
      }
    | string;
  stock: number;
  ratings: {
    average: number;
    count: number;
  };
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
}
