'use client';

import Image from 'next/image';

import useFavorite from '@/store/favorite';

import styles from './product-card.module.css';

const ProductCard = ({ ...product }: Product) => {
  const addToFavorite = useFavorite((state) => state.addToFavorite);

  return (
    <div className={styles.product_card} onClick={() => addToFavorite(product)}>
      <div className={styles.image_wrapper}>
        <Image src={product.image} alt={product.title} fill={true} />
      </div>
      <h6 className={styles.title}>{product.title}</h6>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
