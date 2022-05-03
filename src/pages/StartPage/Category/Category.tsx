import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import styles from './category.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface IContentProps {
  svgIcon: ReactElement;
  link: string;
  name: string;
}

export function Category({svgIcon: svg, link, name}: IContentProps) {
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <li className={styles.category}>
        <Link className={styles.link} to={link}>
          {isLoading ? <Skeleton height={100} width={100}/> : svg}
          <span>{isLoading ? <Skeleton width={80}/> : name}</span>
        </Link>
    </li>
  );
}
