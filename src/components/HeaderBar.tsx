import { HeaderLogo } from './header-bar/HeaderLogo.tsx';
import styles from "../styles/HeaderBar.module.css"

export const HeaderBar = () => {
  return <header className={styles.fmHeaderBar}>
    <nav className={styles.fmHeaderBarNav}>
      <a href="/" className={styles.fmHeaderBarNavLink}>
        <HeaderLogo />
        <h1>FavFilms</h1>
      </a>
      <div className={styles.fmHeaderBarNavLinkBlock}>
        <a href="https://www.omdbapi.com/">Sobre la api</a>
      </div>
    </nav>
  </header>;
};
