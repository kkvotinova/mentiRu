import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './resumeitem.scss';
import { IState } from '../../../../store';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getFormattedDate } from '../../../../utils/format';

interface IContentProps {
  id: string;
  name: string;
  desc: string;
  dateTime: number;
  replyToResume: (id: string, status: 'accepted' | 'rejected') => void;
}

export function ResumeItem({ name, desc, id, replyToResume, dateTime }: IContentProps) {
  const [isFull, setIsFull] = useState(false);

  const loadingStatus = useSelector((state: IState) => state.bids.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

  const date = getFormattedDate(dateTime, true);

  const handlRereplyToResume = useCallback(
    (status: 'accepted' | 'rejected') => {
      replyToResume(id, status);
    },
    [replyToResume, id],
  );

  return (
    <li className={styles.item}>
      <h3 className={styles.heading}>{isLoading ? <Skeleton /> : name}</h3>
      <div className={styles.desc}>
        {isLoading ? (
          <Skeleton count={3} />
        ) : (
          <>
            {isFull ? (
              <>
                {desc} <br /> <span className={styles.span}>{date}</span>
              </>
            ) : (
              desc.substring(0, 130) + ' ...'
            )}
            <span onClick={() => setIsFull((isFull) => !isFull)}>
              {isFull ? ' Hide' : ' See more'}
            </span>
          </>
        )}
      </div>
      <div className={styles.action}>
        <button
          disabled={isLoading}
          onClick={() => handlRereplyToResume('accepted')}
          className={styles.accept}
        >
          Accept
        </button>
        <button
          disabled={isLoading}
          onClick={() => handlRereplyToResume('rejected')}
          className={styles.decline}
        >
          Decline
        </button>
      </div>
    </li>
  );
}
