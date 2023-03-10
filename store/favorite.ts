import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  // state
  totalItems: number;
  products: ProductWithQty[];

  // actions
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (params: Product) => void;
  clearFavorite: () => void;
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
      removeFromFavorite: (product) =>
        set((state) => ({
          totalItems:
            state.totalItems -
            (
              get().products.find(
                (item) => item.id === product.id
              ) as ProductWithQty
            ).qty,
          products: state.products.filter((item) => item.id !== product.id),
        })),
      clearFavorite: () => set({ totalItems: 0, products: [] }),
    }),
    { name: 'favorite' }
  )
);

export default useFavorite;
