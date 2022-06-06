import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../store';
import styles from './infoitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface IItemInfo {
  title: string;
  desc: string;
}

export function InfoItem({ title, desc }: IItemInfo) {
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  if (isLoading) {
    return <Skeleton count={2} width={80} containerClassName={styles.infoItem} />;
  }

  return (
    <li className={styles.infoItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </li>
  );
}
