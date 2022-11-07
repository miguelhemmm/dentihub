import styles from './Categories.module.scss';
import CategoriesSwiper from './Swiper/CategoriesSwiper';

function Categories() {
  return (
    <section className={styles.categories}>
      <h1 className={styles.categories__title}>Top Categories</h1>
      <div className={styles.categories__info}>
        Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum.
        Aenean id ullamcorper libero Vestibulum imperdiet nibh vel magna lacinia commodo
        ultricies
      </div>
      <div className={styles.categories__swiper}>
        <CategoriesSwiper />
      </div>
    </section>
  );
}

export default Categories;
