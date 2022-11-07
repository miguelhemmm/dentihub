import styles from './TopNav.module.scss';

function TopNav() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__list}>
        <ul>
          <li className={styles['navigation__list--logo']}>DentiHub</li>
          <li>Home</li>
          <li>Listings</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.navigation__actions}>
        <div>Miguel Hernandez</div>
        <div className={styles['navigation__actions--cta']}>Action Button</div>
      </div>
    </nav>
  );
}

export default TopNav;
