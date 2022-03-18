import React from 'react';
import styles from './search.scss';

export function Search() {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Find your mentor</h1>
      <div className={styles.group}>
        <input className={styles.input} type="text" placeholder='Mentor search'/>
        <button className={styles.primary}>Search</button>
      </div>
    </section>
  );
}
