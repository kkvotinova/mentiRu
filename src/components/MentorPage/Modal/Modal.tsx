import React, { useEffect } from 'react';
import styles from './modal.scss';

interface IContentProps {
  onChange: (item: boolean) => void;
}

export function Modal({onChange}: IContentProps) {
  return (
    <div onClick={() => onChange(false)} className={styles.modal}>
      <form onClick={(e) => e.stopPropagation()} className={styles.window}>
        <h3 className={styles.heading}>New request</h3>
        <ul className={styles.group}>
          <li className={styles.item}>
            <label htmlFor="date-time">Date & Time</label>
            <input id="date-time" type="datetime-local" required />
          </li>
          <li className={styles.item}>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" placeholder="Description" minLength={50} required></textarea>
          </li>
        </ul>
        <div className={styles.button}>
          <button type='reset' onClick={() => onChange(false)} className={styles.text}>Cancel</button>
          <button className={styles.primary} type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
