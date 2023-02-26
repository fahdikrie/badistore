import create from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  // state
  totalItems: number;
  products: Product[];

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
      addToFavorite: (product) =>
        set({
          totalItems: get().totalItems + 1,
          products: [...get().products, product],
        }),
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
