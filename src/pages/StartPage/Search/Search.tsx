import React, { useState } from 'react';
import styles from './search.scss';
import logo from '../../../resources/start.png';

export function Search() {
  const [block, setBlock] = useState(true)

  return (
    <section className={styles.section}>
      {block ? <div className={styles.block}></div> : null}
      <img
        onLoad={() => setBlock(false)}
        className={styles.logo}
        src={logo}
        alt="start" />
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
