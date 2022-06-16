import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import styles from './category.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { withCapitalLetter } from '../../../utils/format';

interface IContentProps {
  svgIcon: ReactElement;
  name: string;
}

export function Category({ svgIcon: svg, name }: IContentProps) {
  const loadingStatus = useSelector((state: IState) => state.categories.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <li className={styles.category}>
      <Link className={styles.link} to={`/category/${name}`}>
        {isLoading ? <Skeleton height={100} width={100} /> : svg}
        <span>{isLoading ? <Skeleton width={80} /> : withCapitalLetter(name)}</span>
      </Link>
    </li>
  );
}
