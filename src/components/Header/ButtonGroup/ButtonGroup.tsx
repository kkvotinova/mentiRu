import React from 'react';
import { Link } from 'react-router-dom';
import styles from './buttongroup.scss';

export function ButtonGroup() {
  return (
    <div className={styles.group}>
      <Link to="/login" className={styles.secondary}>Log in</Link>
      <Link to="/signup" className={styles.primary}>Sign up</Link>
    </div>
  );
}
