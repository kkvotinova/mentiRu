import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import styles from './competenceitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export interface ICompetencies {
  skill: 'good' | 'average' | 'bad';
  name: string;
}

export function CompetenceItem({skill, name}: ICompetencies) {
  const loadingStatus = useSelector((state: IState) => state.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

  if (isLoading) {
    return (
      <Skeleton style={{width: 120, height: 40, marginRight: 12}}/>
    );
  }

  const className = skill === 'good' ? styles.good : skill === 'average' ? styles.average : styles.bad ;
  return (
    <li className={className}>
      {name}
    </li>
  )
}
