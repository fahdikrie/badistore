import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  // state
  totalItems: number;
  products: ProductWithQty[];

  // actions
  addToFavorite: (product: Product) => void;
  clearFavorite: () => void;
  removeFromFavorite: (params: Product) => void;
}

const useFavorite = create<FavoriteState>()(
  persist(
    (set, get) => ({
      // state
      totalItems: 0,
      products: [],

      // actions
      addToFavorite: (product) => {
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
      clearFavorite: () => set({ totalItems: 0, products: [] }),
      removeFromFavorite: (product) =>
        set((state) => ({
          totalItems: state.totalItems - 1,
          products: state.products.filter((item) => item.id !== product.id),
        })),
    }),
    { name: 'favorite' }
  )
);

export default useFavorite;
