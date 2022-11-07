import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__lists}>
        <ul>
          <li className={styles['footer__lists--title']}>DentiHub</li>
          <li>Home</li>
          <li>Listings</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li className={styles['footer__lists--title']}>DentiHub</li>
          <li>Home</li>
          <li>Listings</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li className={styles['footer__lists--title']}>DentiHub</li>
          <li>Home</li>
          <li>Listings</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li className={styles['footer__lists--title']}>DentiHub</li>
          <li>Home</li>
          <li>Listings</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.footer__rights}>
        <p>© DentiHub 2022. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
