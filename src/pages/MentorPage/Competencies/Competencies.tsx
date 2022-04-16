import React from 'react';
import { CompetenceItem, ICompetencies } from './CompetenceItem';
import styles from './competencies.scss';

export function Competencies(data: ICompetencies[]) {
  return (
    <section className={styles.section}>
      <h2>Competencies</h2>
      <ul className={styles.list}>
        {Object.values(data).map((item, id) => <CompetenceItem key={id} {...item}/>)}
      </ul>
    </section>
  );
}
