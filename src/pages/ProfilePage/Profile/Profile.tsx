import React from 'react';
import styles from './profile.scss';
import avatar from '../../../resources/avatar.jpeg';
import { Form } from './Form';

export function Profile() {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>My profile</h1>
      <div className={styles.info}>
        <div className={styles.left}>
          <img src={avatar} alt="avatar" />
          <button className={styles.text}>Upload new photo</button>
        </div>
        <Form />
      </div>
    </section>
  );
}
