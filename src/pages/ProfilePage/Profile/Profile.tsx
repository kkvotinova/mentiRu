import React from 'react';
import { Form } from './Form';
import styles from './profile.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IUserInfo } from '../../../store/reducers/user/type';

interface ProfileProps {
  isLoading: boolean;
  userInfo: IUserInfo;
}

export function Profile({ isLoading, userInfo }: ProfileProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>My profile</h1>
      <div className={styles.info}>
        <div className={styles.left}>
          {isLoading ? (
            <Skeleton height='100%' containerClassName={styles.avatar} />
          ) : (
            <img className={styles.avatar} src={userInfo.avatar} alt='avatar' />
          )}
          <button disabled={isLoading} className={styles.text}>
            Upload new photo
          </button>
        </div>
        <Form />
      </div>
    </section>
  );
}
