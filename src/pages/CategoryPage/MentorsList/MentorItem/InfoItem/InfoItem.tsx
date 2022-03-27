import React, { useContext } from 'react';
import styles from './infoitem.scss';
import { AuthContext } from '../../../../../context';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export interface IItemInfo {
  title: string;
  desc: string;
}

export function InfoItem({title, desc}: IItemInfo) {
  const {isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <Skeleton
        count={2}
        width={80}
        containerClassName={styles.infoItem}/>
    );
  }

  return (
    <li className={styles.infoItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </li>
  );
}
