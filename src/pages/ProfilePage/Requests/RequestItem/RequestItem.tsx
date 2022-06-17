import React from 'react';
import { CancelIcon } from '../../../../components/icons';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import styles from './requestitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getFormattedDate } from '../../../../utils/format';

interface IContentProps {
  id: string;
  name: string;
  date: number;
  status: string;
  // TODO: Связать с API
  // deleteRequest: (id: number) => void;
}

export function RequestItem({ id, name, date, status }: IContentProps) {
  const chipsStatus =
    status === 'accepted' ? styles.accept : status === 'not_seen' ? styles.notSeen : styles.decline;

  const loadingStatus = useSelector((state: IState) => state.bids.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <tr>
      <td className={`${styles.td} ${styles.name}`}>
        {isLoading ? <Skeleton width='60%' /> : name}
      </td>
      <td className={styles.td}>{isLoading ? <Skeleton width='60%' /> : getFormattedDate(date)}</td>
      <td className={`${styles.td} ${styles.status}`}>
        {isLoading ? (
          <Skeleton width={60} />
        ) : (
          <>
            <div className={chipsStatus}>{status}</div>
            <button className={styles.cancel}>
              <CancelIcon />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
