import create from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  // state
  totalItems: number;
  cart: Product[];

  // actions
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (params: Product) => void;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      // state
      totalItems: 0,
      cart: [],

      // actions
      addToCart: (product) => ({
        totalItems: get().totalItems + 1,
        cart: [...get().cart, product],
      }),
      clearCart: () => set({ totalItems: 0, cart: [] }),
      removeFromCart: (product) =>
        set((state) => ({
          totalItems: state.totalItems - 1,
          cart: state.cart.filter((item) => item.id !== product.id),
        })),
    }),
    { name: 'cart' }
  )
);

export default useCart;
