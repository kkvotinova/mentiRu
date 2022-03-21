import React from 'react';
import styles from './input.scss';

export function Input() {
  return (
    <ul className={styles.group}>
      <li className={styles.item}>
        <label htmlFor="place">Place of work</label>
        <input id="place" type="text" placeholder="Place of work" required/>
      </li>
      <li className={`${styles.item} ${styles.double}`}>
        <div className={styles.left}>
          <label htmlFor="experience">Experience</label>
          <input id="experience" type="text" placeholder="Experience" required/>
        </div>
        <div className={styles.right}>
          <label htmlFor="price">Price</label>
          <input id="price" type="text" placeholder="Price" required/>
        </div>
      </li>
      <li className={styles.item}>
        <label htmlFor="about_me">About me</label>
        <textarea id="about_me" placeholder="About me" required minLength={100}/>
      </li>
      <li className={styles.item}>
        <label htmlFor="competencies">Competencies</label>
        <textarea id="competencies" placeholder="Competencies" required/>
      </li>
    </ul>
  );
}
