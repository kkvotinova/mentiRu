import React from 'react';
import styles from './requestitem.scss';

interface IContentProps {
  id: number;
  name: string;
  category: string;
  status: 'Accept' | 'Decline';
  deleteRequest: (id: number) => void;
}

export function RequestItem({id, name, category, status, deleteRequest}: IContentProps) {
  const chipsStatus = status === 'Accept' ? styles.accept : styles.decline;

  return (
    <tr>
      <td className={`${styles.td} ${styles.name}`}>{name}</td>
      <td className={styles.td}>{category}</td>
      <td className={`${styles.td} ${styles.status}`}>
        <div className={chipsStatus}>{status}</div>
        <button
            className={styles.cancel}
            onClick={() => deleteRequest(id)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8045 0.195435C15.6795 0.0704544 15.51 0.000244141 15.3332 0.000244141C15.1564 0.000244141 14.9869 0.0704544 14.8619 0.195435L7.99986 7.05744L1.13786 0.195435C1.01284 0.0704544 0.8433 0.000244141 0.666524 0.000244141C0.489748 0.000244141 0.320209 0.0704544 0.195191 0.195435C0.0702103 0.320454 0 0.489992 0 0.666768C0 0.843544 0.0702103 1.01308 0.195191 1.1381L7.05719 8.0001L0.195191 14.8621C0.0702103 14.9871 0 15.1567 0 15.3334C0 15.5102 0.0702103 15.6797 0.195191 15.8048C0.320209 15.9297 0.489748 16 0.666524 16C0.8433 16 1.01284 15.9297 1.13786 15.8048L7.99986 8.94277L14.8619 15.8048C14.9869 15.9297 15.1564 16 15.3332 16C15.51 16 15.6795 15.9297 15.8045 15.8048C15.9295 15.6797 15.9997 15.5102 15.9997 15.3334C15.9997 15.1567 15.9295 14.9871 15.8045 14.8621L8.94252 8.0001L15.8045 1.1381C15.9295 1.01308 15.9997 0.843544 15.9997 0.666768C15.9997 0.489992 15.9295 0.320454 15.8045 0.195435Z" fill="black"/>
          </svg>
        </button>
      </td>
    </tr>
  );
}
