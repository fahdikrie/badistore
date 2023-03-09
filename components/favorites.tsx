'use client';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

import useFavorite from '@/store/favorite';

import styles from './favorites.module.css';

const Favorites = () => {
  const totalItems = useFavorite((state) => state.totalItems);
  const favProducts = useFavorite((state) => state.products);
  const clearFavorites = useFavorite((state) => state.clearFavorite);
  const addToFavorites = useFavorite((state) => state.addToFavorite);

  return (
    <div
      className={`${styles.favorites} group`}
      onClick={() => clearFavorites()}
    >
      <div className={styles.favorites_button}>
        {totalItems ? <BsHeartFill /> : <BsHeart />}
        <span>{totalItems}</span>
      </div>

      <div
        className={`${styles.favorites_dropdown} max-h-0 group-hover:max-h-64`}
      >
        <div className={styles.favorites_dropdown_wrapper}>
          {totalItems ? (
            favProducts.map((product, idx) => (
              <div key={idx} className={styles.favorites_dropdown_item}>
                {product.title}
                <button onClick={() => addToFavorites(product)}>Add</button>
              </div>
            ))
          ) : (
            <h6>Favorites is empty</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
