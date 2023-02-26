import styles from './category-card.module.css';

const CategoryCard = ({ category }: { category: string }) => {
  return <div className={styles.category_card}># {category}</div>;
};

export default CategoryCard;
