import React, { useMemo } from 'react';
import { MentorItem, IContentProps as IMentorInfo } from './MentorItem';
import styles from './mentorslist.scss';

const MENTOR_LIST: IMentorInfo[] = [
  {
    id: 937563,
    name: 'Nikita Sobolev',
    job: 'CTO @ wemake.services',
    info: [
      {
        title: 'Expirience',
        desc: '10+ years',
      },
      {
        title: 'Price per 1 hour',
        desc: '65$',
      },
      {
        title: 'Received help',
        desc: '8 people',
      },
    ],
  },
  {
    id: 136549,
    name: 'Nikita Sobolev',
    job: 'CTO @ wemake.services',
    info: [
      {
        title: 'Expirience',
        desc: '10+ years',
      },
      {
        title: 'Price per 1 hour',
        desc: '65$',
      },
      {
        title: 'Received help',
        desc: '8 people',
      },
    ],
  },
];

export function MentorsList() {
  const mentorList = useMemo(
    () => MENTOR_LIST.map((item) => <MentorItem key={item.id} {...item} />),
    [],
  );

  return (
    <div className={styles.mentors}>
      <ul>{mentorList}</ul>
    </div>
  );
}
