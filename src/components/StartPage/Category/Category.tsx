import React from 'react';
import styles from './category.scss';

interface IContentProps {
  svg: React.Component;
  link: string;
  name: string;
}

export function Category({svg, link, name}: IContentProps) {
  return (
    <li className={styles.category}>
      <a className={styles.link} href={link}>
        {svg}
        <span>{name}</span>
      </a>
    </li>
  );
}
