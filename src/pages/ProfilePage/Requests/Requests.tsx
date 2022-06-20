import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store';
import { deleteBid, getSentBids } from '../../../store/actions/bids';
import { RequestItem } from './RequestItem';
import styles from './requests.scss';

export function Requests() {
  const dispatch = useDispatch();
  const sentBids = useSelector((state: IState) => state.bids.sentBids);

  const onDeleteRequest = useCallback(
    (id: string) => {
      dispatch(deleteBid(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getSentBids());
  }, [dispatch]);

  const requestList = useMemo(
    () =>
      sentBids.map((a) => (
        <RequestItem
          key={a.id_}
          id={a.id_}
          name={a.to_name}
          date={a.date_time_add}
          status={a.status}
          deleteRequest={onDeleteRequest}
        />
      )),
    [onDeleteRequest, sentBids],
  );

  return (
    <section className={styles.section}>
      <h2>My requests</h2>
      <table className={styles.table} style={!sentBids.length ? { display: 'none' } : undefined}>
        <thead>
          <tr className={styles.tr}>
            <td className={styles.name}>Name</td>
            <td className={styles.td}>Date of creation</td>
            <td className={styles.td}>Status</td>
          </tr>
        </thead>
        <tbody>{requestList}</tbody>
      </table>
    </section>
  );
}
