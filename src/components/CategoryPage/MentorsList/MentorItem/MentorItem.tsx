import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mentoritem.scss';
import avatar from '../../../../resources/avatar.jpeg';

interface IContentProps {
  id: number;
  name: string;
  job: string;
  info: IItemInfo[];
}

export function MentorItem(props: IContentProps) {
  const {name, job, info, id} = props;

  return (
    <li className={styles.item}>
      <Link to={`/mentor/${id}`}>
        <img className={styles.avatar} src={`/${avatar}`} alt="avatar" />
        <div>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.job}>{job}</div>
          <ul className={styles.info}>
            {info.map((item, id) => <InfoItem key={id} {...item}/>)}
          </ul>
        </div>
      </Link>
    </li>
  );
}

interface IItemInfo {
  title: string;
  desc: string;
}

const InfoItem = ({title, desc}: IItemInfo) => {
  return (
    <li className={styles.infoItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </li>
  );
}
