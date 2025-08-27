import styles from '../styles/AsideBar.module.css';
import { AsideBarForm } from './aside-bar/AsideBarForm.tsx';
import { useMemo, useState } from 'react';

export const AsideBar = ({ searchMovies, currentSearch }: { searchMovies: Function, currentSearch: string }) => {
  const [isHiding, setIsHiding] = useState(null as boolean | null);


  const asideContentClasses = useMemo(() => {
    return isHiding === null
      ? styles.fmAppMainAsideContent
      : isHiding
      ? `${styles.fmAppMainAsideContent} ${styles.fmAppMainAsideContentHide}`
      : `${styles.fmAppMainAsideContent} ${styles.fmAppMainAsideContentShow}`;
  }, [isHiding]);

  const asideIcon = useMemo(() => {
    return isHiding ? '>' : 'x';
  }, [isHiding]);

  return (
    <aside className={styles.fmAppMainAside}>
      <button
        className={styles.fmAppMainAsideContentButton}
        onClick={() => setIsHiding(!isHiding)}
      >
        {asideIcon}
      </button>
      <div className={asideContentClasses}>
        <AsideBarForm         className={styles.fmAppMainAsideContentForm}
 searchMovies={searchMovies} currentSearch={currentSearch} />
      </div>
    </aside>
  );
};
