import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './resumeitem.scss';
import { IState } from '../../../../store';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IContentProps {
  id: number;
  name: string;
  desc: string;
  deleteResume: (id: number) => void;
}

export function ResumeItem({ name, desc, id, deleteResume }: IContentProps) {
  const [isFull, setIsFull] = useState(false);
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <li className={styles.item}>
      <h3 className={styles.heading}>{isLoading ? <Skeleton /> : name}</h3>
      <div className={styles.desc}>
        {isLoading ? (
          <Skeleton count={3} />
        ) : (
          <>
            {isFull ? desc : desc.substring(0, 130) + ' ...'}
            <span onClick={() => setIsFull((isFull) => !isFull)}>
              {isFull ? ' Hide' : ' See more'}
            </span>
          </>
        )}
      </div>
      <div className={styles.action}>
        <button disabled={isLoading} onClick={() => deleteResume(id)} className={styles.accept}>
          Accept
        </button>
        <button disabled={isLoading} onClick={() => deleteResume(id)} className={styles.decline}>
          Decline
        </button>
      </div>
    </li>
  );
}
