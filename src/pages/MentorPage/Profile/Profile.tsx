import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { ProfileItem, IItemInfo } from './ProfileItem';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import avatar from '../../../resources/avatar.jpeg';
import styles from './profile.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IMentorInfo {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  name: string;
  job: string;
  info: IItemInfo[];
}

export function Profile({ name, job, info, setShowModal }: IMentorInfo) {
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  const infoList = useMemo(
    () => info.map((item, id) => <ProfileItem key={id} {...item} />),
    [info],
  );

  return (
    <section className={styles.section}>
      {isLoading ? (
        <Skeleton height='100%' containerClassName={styles.avatar} />
      ) : (
        <img className={styles.avatar} src={avatar} alt='avatar' />
      )}
      <div>
        <h1 className={styles.name}>{isLoading ? <Skeleton /> : name}</h1>
        <div className={styles.job}>{isLoading ? <Skeleton /> : job}</div>
        <ul className={styles.info}>
          {isLoading ? <Skeleton count={3} style={{ marginBottom: 10 }} /> : infoList}
        </ul>
        <button disabled={isLoading} onClick={() => setShowModal(true)} className={styles.primary}>
          Leave a request
        </button>
      </div>
    </section>
  );
}
