import CategoryCard from '@/components/category-card';
import ProductCard from '@/components/product-card';
import { productServices } from '@/config/fake-store-api';

import styles from './hero.module.css';

const getCategories = async () => {
  const data = await productServices.getCategories();
  return data;
};

const getProducts = async () => {
  const data = await productServices.getProducts();
  return data;
};

const Hero = async () => {
  let categories: string[] = [];
  let products: Product[] = [];

  try {
    const [categoriesData, productsData] = await Promise.allSettled([
      getCategories(),
      getProducts(),
    ]);

    if (categoriesData.status === 'fulfilled') {
      categories = categoriesData.value;
    } else {
      console.error(categoriesData.reason);
    }

    if (productsData.status === 'fulfilled') {
      products = productsData.value;
    } else {
      console.error(productsData.reason);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>all your daily needs, in one place.</h1>
      <p className={styles.hero_subtitle}>
        Ranging from <u>gadget</u> to <u>everyday wear</u>,{' '}
        <span>badistore™</span> got you covered.
      </p>

      <div className={styles.categories}>
        {categories.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>

      <div className={styles.products}>
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
