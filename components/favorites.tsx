'use client';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

import useFavorite from '@/store/favorite';

import styles from './favorites.module.css';

const Favorites = () => {
  const totalItems = useFavorite((state) => state.totalItems);
  const clearFavorites = useFavorite((state) => state.clearFavorite);

  return (
    <div className={styles.favorites} onClick={() => clearFavorites()}>
      {totalItems ? <BsHeartFill /> : <BsHeart />}
      <span>{totalItems}</span>
    </div>
  );
};

export default Favorites;
