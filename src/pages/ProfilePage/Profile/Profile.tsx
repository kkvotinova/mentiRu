import React from 'react';
import { Form } from './Form';
import { IState } from '../../../reducers';
import { useSelector } from 'react-redux';
import avatar from '../../../resources/avatar.jpeg';
import styles from './profile.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export function Profile() {
  const loadingStatus = useSelector((state: IState) => state.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

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
