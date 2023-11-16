import { HeaderLogo } from './header-bar/HeaderLogo.tsx';
import styles from '../styles/HeaderBar.module.css';
import { Link } from 'react-router-dom';

export const HeaderBar = () => {
  return (
    <header className={styles.fmHeaderBar}>
      <div className={styles.fmHeaderBarNav}>
        <Link to="/" className={styles.fmHeaderBarNavLink}>
          <HeaderLogo />
          <h1>FavFilms</h1>
        </Link>
        <nav className={styles.fmHeaderBarNavLinkBlock}>
          <ul className={styles.fmHeaderBarNavLinkList}>
            <li>
              <Link to="/" className={styles.fmHeaderBarNavLink}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/liked" className={styles.fmHeaderBarNavLink}>
                Mis favoritas
              </Link>
            </li>
            <li>
              <a href="https://www.omdbapi.com/" target="_blank" className={styles.fmHeaderBarNavLink}>Sobre la api</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
