'use client';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

import useFavorite from '@/store/favorite';

import styles from './favorites.module.css';

const Favorites = () => {
  const totalItems = useFavorite((state) => state.totalItems);
  const favProducts = useFavorite((state) => state.products);
  const addToFavorite = useFavorite((state) => state.addToFavorite);
  const clearFavorite = useFavorite((state) => state.clearFavorite);

  return (
    <div className={`${styles.favorites} group`}>
      <div className={styles.favorites_button}>
        {totalItems ? <BsHeartFill /> : <BsHeart />}
        <span>{favProducts.length}</span>
      </div>

      <div
        className={`${styles.favorites_dropdown}
          max-h-0 group-hover:max-h-64
        `}
      >
        <div className={styles.favorites_dropdown_wrapper}>
          {totalItems ? (
            <>
              {favProducts.map((product, idx) => (
                <div key={idx} className={styles.favorites_dropdown_item}>
                  {product.title} <br />
                  Stock: {product.qty} <br />
                  <button onClick={() => addToFavorite(product)}>Add</button>
                </div>
              ))}

              <button onClick={clearFavorite}>Clear</button>
            </>
          ) : (
            <h6>Favorites is empty</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
