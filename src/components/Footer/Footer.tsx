import React from 'react';
import styles from './footer.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h4 className={styles.heading}>About us</h4>
          <div className={styles.description}>
            <p>Frontend: @ksuvot</p>
            <p>Backend: @dmitryvargin</p>
          </div>
        </div>
        <div className={styles.year}>© 2022</div>
      </div>
    </footer>
  );
}
