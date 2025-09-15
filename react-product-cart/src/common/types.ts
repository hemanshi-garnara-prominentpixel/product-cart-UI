export interface ProductData {
  id: number;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
  discount: number;
  stockStatus: "In Stock" | "Out of Stock" | "Limited Stock";
  shortDescription: string;
  fullDescription: string;
  category: string;
  deliveryOptions: string[];
  warranty: string;
  returnPolicy: string;
}

export type CartProps = {
  product: ProductData;
  onAddToCart?: (id: number) => void; // optional handler
};

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
  discount: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductData) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};