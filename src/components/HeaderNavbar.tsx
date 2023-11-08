import { HeaderLogo } from './HeaderLogo.tsx';

export const HeaderNavbar = () => {
  return <header>
    <nav>
      <a href="/">
        <HeaderLogo />
        <h1>FavFilms</h1>
      </a>
      <div>
        <a href="https://www.omdbapi.com/">Sobre la api</a>
      </div>
    </nav>
  </header>;
};
