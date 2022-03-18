import React from 'react';
import { MentorItem } from './MentorItem';
import styles from './mentorslist.scss';

interface IItemInfo {
  title: string;
  desc: string;
}

interface IMentorInfo {
  name: string;
  job: string;
  info: IItemInfo[];
}

const MENTOR_LIST: IMentorInfo[] = [
  {
    name: 'Nikita Sobolev',
    job: 'CTO @ wemake.services',
    info: [
      {
        title: 'Expirience',
        desc: '10+ years'
      },
      {
        title: 'Price per 1 hour',
        desc: '65$'
      },
      {
        title: 'Received help',
        desc: '8 people'
      }
    ]
  },
  {
    name: 'Nikita Sobolev',
    job: 'CTO @ wemake.services',
    info: [
      {
        title: 'Expirience',
        desc: '10+ years'
      },
      {
        title: 'Price per 1 hour',
        desc: '65$'
      },
      {
        title: 'Received help',
        desc: '8 people'
      }
    ]
  }
];

export function MentorsList() {
  return (
    <div className={styles.mentors}>
      <ul>
        {MENTOR_LIST.map((item, id) => <MentorItem key={id} {...item}/>)}
      </ul>
    </div>
  );
}
