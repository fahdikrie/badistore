import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  // state
  totalItems: number;
  products: ProductWithQty[];

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
      addToCart: (product) => {
        let products = get().products;

        if (products.find((item) => item.id === product.id)) {
          products = products.map((item) => {
            if (item.id === product.id) {
              return { ...item, qty: item.qty + 1 };
            }

            return item;
          });
        } else {
          products = [...products, { ...product, qty: 1 }];
        }

        return set({
          totalItems: get().totalItems + 1,
          products: products,
        });
      },
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
