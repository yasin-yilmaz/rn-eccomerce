export const CATEGORIES = [
  { id: 1, name: "Men", icon: "man-outline" },
  { id: 2, name: "Women", icon: "woman-outline" },
  { id: 3, name: "Kids", icon: "happy-outline" },
  { id: 4, name: "Shoes", icon: "footsteps-outline" },
  { id: 5, name: "Bag", icon: "briefcase-outline" },
  { id: 6, name: "Other", icon: "grid-outline" },
];

export type TCategoryItem = (typeof CATEGORIES)[number];

export const PROFILE_MENU = [
  { id: 1, title: "My Orders", icon: "receipt-outline", route: "/orders" },
  {
    id: 2,
    title: "Shipping Addresses",
    icon: "location-outline",
    route: "/addresses",
  },
  { id: 4, title: "My Reviews", icon: "star-outline", route: "/" },
  { id: 5, title: "Settings", icon: "settings-outline", route: "/" },
];
