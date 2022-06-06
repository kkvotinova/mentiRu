import React from 'react';
import styles from './modalcontent.scss';

export function ModalContent() {
  return (
    <ul className={styles.group}>
      <li className={styles.item}>
        <label htmlFor='date-time'>Date & Time</label>
        <input id='date-time' type='datetime-local' required />
      </li>
      <li className={styles.item}>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          placeholder='Description'
          minLength={50}
          required
        ></textarea>
      </li>
    </ul>
  );
}
