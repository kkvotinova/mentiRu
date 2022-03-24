import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './category.scss';

interface IContentProps {
  svgIcon: ReactElement;
  link: string;
  name: string;
}

export function Category({svgIcon: svg, link, name}: IContentProps) {
  return (
    <li className={styles.category}>
      <Link className={styles.link} to={link}>
        {svg}
        <span>{name}</span>
      </Link>
    </li>
  );
}
