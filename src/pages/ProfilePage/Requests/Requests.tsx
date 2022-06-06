import React, { useCallback, useMemo, useState } from 'react';
import { RequestItem } from './RequestItem';
import styles from './requests.scss';

interface IContentProps {
  id: number;
  name: string;
  category: string;
  status: 'Accept' | 'Decline';
}

const CONTENT_LIST: IContentProps[] = [
  {
    id: 926583,
    name: 'Ivanov Ivan',
    category: 'Category name',
    status: 'Decline',
  },
  {
    id: 264836,
    name: 'Ivanov Ivan',
    category: 'Category name',
    status: 'Accept',
  },
];

export function Requests() {
  const [request, setRequest] = useState(CONTENT_LIST);

  const deleteRequest = useCallback(
    (id: number) => {
      setRequest((request) => request.filter((item) => id != item.id));
    },
    [setRequest],
  );

  const requestList = useMemo(
    () =>
      request.map((item) => <RequestItem key={item.id} deleteRequest={deleteRequest} {...item} />),
    [deleteRequest, request],
  );

  return (
    <section className={styles.section}>
      <h2>My requests</h2>
      <table className={styles.table} style={!request.length ? { display: 'none' } : undefined}>
        <thead>
          <tr className={styles.tr}>
            <td className={styles.name}>Name</td>
            <td className={styles.td}>Category</td>
            <td className={styles.td}>Status</td>
          </tr>
        </thead>
        <tbody>{requestList}</tbody>
      </table>
    </section>
  );
}
