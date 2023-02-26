import Image from 'next/image';

import styles from './product-card.module.css';

const ProductCard = ({ ...product }: Product) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image_wrapper}>
        <Image src={product.image} alt={product.title} fill={true} />
      </div>
      <h6 className={styles.title}>{product.title}</h6>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
