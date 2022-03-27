import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../context';
import styles from './resumeitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


interface IContentProps {
  id: number;
  name: string;
  desc: string;
  deleteResume: (id: number) => void;
}

export function ResumeItem({name, desc, id, deleteResume}: IContentProps) {
  const [isFull, setIsFull] = useState(false);
  const {isLoading} = useContext(AuthContext);

  return (
    <li className={styles.item}>
      <h3 className={styles.heading}>{isLoading ? <Skeleton /> : name}</h3>
      <div className={styles.desc}>
        {isLoading ? <Skeleton count={3}/> : <>
          {isFull ? desc : desc.substring(0, 130) + ' ...'}
          <span onClick={() => setIsFull(isFull => !isFull)}>
            {isFull ? ' Hide' : ' See more'}
          </span>
        </>}
      </div>
      <div className={styles.action}>
        <button
          disabled={isLoading}
          onClick={() => deleteResume(id)}
          className={styles.accept}>
          Accept</button>
        <button
          disabled={isLoading}
          onClick={() => deleteResume(id)}
          className={styles.decline}>
          Decline</button>
      </div>
    </li>
  );
}
