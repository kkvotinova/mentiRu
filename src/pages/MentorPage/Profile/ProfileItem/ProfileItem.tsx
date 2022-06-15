import React from 'react';
import styles from './profileitem.scss';

export interface IItemInfo {
  title: string;
  desc: string;
}

export function ProfileItem({ title, desc }: IItemInfo) {
  return (
    <li className={styles.item}>
      <span className={styles.title}>{title + ': '}</span>
      <span className={styles.desc}>{desc}</span>
    </li>
  );
}
