import React, { useContext } from 'react';
import styles from './profile.scss';
import avatar from '../../../resources/avatar.jpeg';
import { Form } from './Form';
import { AuthContext } from '../../../context';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export function Profile() {
  const {isLoading} = useContext(AuthContext);

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>My profile</h1>
      <div className={styles.info}>
        <div className={styles.left}>
          {isLoading ? <Skeleton height="100%" containerClassName={styles.avatar} /> :
            <img className={styles.avatar} src={avatar} alt="avatar" />
          }
          <button disabled={isLoading} className={styles.text}>Upload new photo</button>
        </div>
        <Form />
      </div>
    </section>
  );
}
