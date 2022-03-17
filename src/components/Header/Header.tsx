import React from 'react';
import styles from './header.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>menti<span>Ru</span></div>
      <div className={styles.group}>
        <a href="#" className={styles.secondary}>Log in</a>
        <a href="#" className={styles.primary}>Sign up</a>
      </div>
    </header>
  );
}
