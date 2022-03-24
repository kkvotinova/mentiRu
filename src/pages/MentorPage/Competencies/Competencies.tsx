import React from 'react';
import styles from './competencies.scss';

interface ICompetencies {
  skill: number;
  name: string;
}

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

const CompetenceItem = ({skill, name}: ICompetencies) => {
  const className = skill > 7 ? styles.good : skill > 5 ? styles.average : styles.bad ;
  return (
    <li className={className}>
      <span className={styles.skill}>{skill}</span>
      <span>{name}</span>
    </li>
  )
}
