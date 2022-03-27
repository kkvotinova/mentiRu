import React, { useContext } from 'react';
import { AuthContext } from '../../../../context';
import styles from './competenceitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export interface ICompetencies {
  skill: number;
  name: string;
}

export function CompetenceItem({skill, name}: ICompetencies) {
  const {isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <Skeleton style={{width: 120, height: 40, marginRight: 12}}/>
    );
  }

  const className = skill > 7 ? styles.good : skill > 5 ? styles.average : styles.bad ;
  return (
    <li className={className}>
      <span className={styles.skill}>{skill}</span>
      <span>{name}</span>
    </li>
  )
}
