'use client';

import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

import useFavorite from '@/store/favorite';

import styles from './favorites.module.css';

const Favorites = () => {
  const totalItems = useFavorite((state) => state.totalItems);
  const favProducts = useFavorite((state) => state.products);
  const clearFavorites = useFavorite((state) => state.clearFavorite);
  const addToFavorites = useFavorite((state) => state.addToFavorite);

  const [isHoverButton, setHoverButton] = useState(false);
  const [isHoverDropdown, setHoverDropdown] = useState(false);

  useEffect(() => {
    console.log('Hover', isHoverButton);
    console.log('Hover Dropdown', isHoverDropdown);
    console.log('');
  }, [isHoverDropdown, isHoverButton]);

  const handleButtonMouseEnter = () => {
    setTimeout(() => {
      setHoverButton(true);
    }, 150);
  };

  const handleButtonMouseLeave = () => {
    if (isHoverDropdown) {
      return;
    }

    setTimeout(() => {
      setHoverButton(false);
    }, 250);
  };

  const handleDropdownMouseEnter = () => {
    setTimeout(() => {
      setHoverButton(true);
      setHoverDropdown(true);
    }, 0);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setHoverDropdown(false);
      setHoverButton(false);
    }, 250);
  };

  return (
    <>
      <div
        className={styles.favorites}
        onClick={() => clearFavorites()}
        onMouseEnter={() => handleButtonMouseEnter()}
        onMouseLeave={() => handleButtonMouseLeave()}
      >
        <div className={styles.favorites_button}>
          {totalItems ? <BsHeartFill /> : <BsHeart />}
          <span>{totalItems}</span>
        </div>

        <div
          className={`${styles.favorites_dropdown} ${
            isHoverButton ? styles.show_dropdown : ''
          }`}
          onMouseEnter={() => handleDropdownMouseEnter()}
          onMouseLeave={() => handleDropdownMouseLeave()}
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
    </>
  );
};

export default Favorites;
