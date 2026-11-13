export const TAB_ROUTES = {
  HOME: "index",
  CART: "cart",
  FAVORITES: "favorites",
  PROFILE: "profile",
} as const;

export type TTabRoute = (typeof TAB_ROUTES)[keyof typeof TAB_ROUTES];
