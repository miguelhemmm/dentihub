import styles from './Hero.module.scss';
import heroImg from '../../assets/images/hero-image.png';
import icon from '../../assets/images/icon.svg';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__info}>
        <div className={styles['hero__info--copy']}>
          <h1>Explore Our Verified Listings</h1>
          <p>
            There are plenty of location-specific and industry-specific business
            listing sites where you can submit your data.
          </p>
        </div>
        <div className={styles['hero__info--ratings']}>
          <h3>Ratings 5.0</h3>
          <p>Trusted by clients worldwide</p>
          <div className={styles.icons}>
            <span><img src={icon} alt="user icon" /></span>
            <span><img src={icon} alt="user icon" /></span>
            <span><img src={icon} alt="user icon" /></span>
            <span><img src={icon} alt="user icon" /></span>
            <span>+10k</span>

          </div>
        </div>
        <div className={styles['hero__info--contact']}>
          <h2>+52 888 888 888    </h2>
          <p>If you&apos;re in a hurry, quick call for us. We are here 24/7 to help you asap.</p>
        </div>
      </div>
      <div className={styles.hero__image}>
        <figure>
          <img src={heroImg} alt="building" />
        </figure>
      </div>
      <div className={styles.hero__stats}>
        <div className={styles['stats--info']}>
          <h1>8k+</h1>
          <p>Total Listings</p>
        </div>
        <div className={styles['stats--info']}>
          <h1>5.7k</h1>
          <p>Places in the world</p>
        </div>
        <div className={styles['stats--info']}>
          <h1>9.9k</h1>
          <p>Happy People</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
