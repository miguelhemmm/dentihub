import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <section className={styles.search}>
      <div className={styles.search__categories}>Categories</div>
      <div className={styles.search__location}>Location</div>
      <div className={styles.search__pricing}>Pricing</div>
      <div className={styles.search__cta}>
        <span><img src="https://img.icons8.com/color/512/search.png" alt="search" /></span>
        Explore from listings
      </div>
    </section>
  );
}

export default SearchBar;
