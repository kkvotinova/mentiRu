import React from 'react';
import styles from './profile.scss';
import avatar from '../../../resources/avatar.jpeg';

interface IMentorInfo {
  onChange: (item: boolean) => void;
  name: string;
  job: string;
  info: IItemInfo[];
}

interface IItemInfo {
  title: 'Experience' | 'Price (per hour)' | 'Received help';
  desc: string;
}

export function Profile({name, job, info, onChange}: IMentorInfo) {
  return (
    <section className={styles.section}>
      <img className={styles.avatar} src={`/${avatar}`} alt="avatar" />
      <div>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.job}>{job}</div>
        <ul className={styles.info}>
          {info.map((item, id) => <ProfileInfo key={id} {...item}/>)}
        </ul>
        <button onClick={() => onChange(true)} className={styles.primary}>Leave a request</button>
      </div>
    </section>
  );
}

const ProfileInfo = ({title, desc}: IItemInfo) => {
  return (
    <li className={styles.item}>
      <span className={styles.title}>{title + ':'}</span>
      <span className={styles.desc}>{desc}</span>
    </li>
  )
}
