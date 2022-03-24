import React from 'react';
import styles from './search.scss';
import logo from '../../../resources/start.png';

export function Search() {
  return (
    <section className={styles.section}>
      <img className={styles.logo} src={logo} alt="start" />
      <div className={styles.search}>
        <input
            type="text"
            className={styles.input}
            placeholder="Mentor search"/>
        <button className={styles.primary}>Search</button>
      </div>
    </section>
  );
}
