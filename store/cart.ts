import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  // state
  totalItems: number;
  products: Product[];

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
      products: [],

      // actions
      addToCart: (product) =>
        set({
          totalItems: get().totalItems + 1,
          products: [...get().products, product],
        }),
      clearCart: () => set({ totalItems: 0, products: [] }),
      removeFromCart: (product) =>
        set((state) => ({
          totalItems: state.totalItems - 1,
          products: state.products.filter((item) => item.id !== product.id),
        })),
    }),
    { name: 'cart' }
  )
);

export default useCart;
