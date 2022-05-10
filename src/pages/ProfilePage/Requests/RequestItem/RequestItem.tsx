import React from 'react';
import { CancelIcon } from '../../../../components/icons';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import styles from './requestitem.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface IContentProps {
  id: number;
  name: string;
  category: string;
  status: 'Accept' | 'Decline';
  deleteRequest: (id: number) => void;
}

export function RequestItem({id, name, category, status, deleteRequest}: IContentProps) {
  const chipsStatus = status === 'Accept' ? styles.accept : styles.decline;
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === loadingStatus;

  return (
    <tr>
      <td className={`${styles.td} ${styles.name}`}>{isLoading ? <Skeleton width="60%"/> : name}</td>
      <td className={styles.td}>{isLoading ? <Skeleton width="60%"/> : category}</td>
      <td className={`${styles.td} ${styles.status}`}>
        {isLoading ? <Skeleton width={60}/> : <>
          <div className={chipsStatus}>{status}</div>
          <button
              className={styles.cancel}
              onClick={() => deleteRequest(id)}>
              <CancelIcon />
          </button>
        </>}
      </td>
    </tr>
  );
}
