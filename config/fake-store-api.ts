const BASE_API_URL = 'https://fakestoreapi.com';

export const productServices = {
  getProducts: (): Promise<Product[]> => {
    return fetch(`${BASE_API_URL}/products`).then((res) => res.json());
  },
  getCategories: (): Promise<string[]> => {
    return fetch(`${BASE_API_URL}/products/categories`).then((res) =>
      res.json()
    );
  },
};

const fakeStoreApiServices = {
  productServices,
};
export default fakeStoreApiServices;
