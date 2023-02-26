import Cart from '@/components/cart';
import Favorites from '@/components/favorites';

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h4>badistore™</h4>
      </div>
      <div className={styles.menu}>
        <Favorites />
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
