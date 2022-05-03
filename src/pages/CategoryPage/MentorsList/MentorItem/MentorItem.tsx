import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IItemInfo, InfoItem } from './InfoItem';
import { IState } from '../../../../store';
import avatar from '../../../../resources/avatar.jpeg';
import styles from './mentoritem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export interface IContentProps {
  id: number;
  name: string;
  job: string;
  info: IItemInfo[];
}

export function MentorItem(props: IContentProps) {
  const {name, job, info, id} = props;
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <li className={styles.item}>
      <Link to={`/mentor/${id}`}>
        {isLoading ? <Skeleton style={{marginRight: 14, width: 124, height: 146}} /> :
          <img className={styles.avatar} src={avatar} alt="avatar" />
        }
        <div>
          <h4 className={styles.name}>{isLoading ? <Skeleton /> :name}</h4>
          <div className={styles.job}>{isLoading ? <Skeleton /> :job}</div>
          <ul className={styles.info}>
            {info.map((item, id) => <InfoItem key={id} {...item}/>)}
          </ul>
        </div>
      </Link>
    </li>
  );
}
