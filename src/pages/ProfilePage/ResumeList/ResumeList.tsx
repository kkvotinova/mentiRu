/* eslint-disable max-len */
import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { EditIcon } from '../../../components/icons/EditIcon';
import { IState } from '../../../store';
import { ResumeItem } from './ResumeItem';
import styles from './resumelist.scss';

interface IContentProp {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export function ResumeList({ setShowModal }: IContentProp) {
  const userBids = useSelector((state: IState) => state.bids.userBids);

  const onClickResume = useCallback((id: string, status: 'accepted' | 'rejected') => {
    // TODO: связать с API
    console.log(id);
    console.log(status);
  }, []);

  const config = useMemo(
    () =>
      userBids.map((a) => (
        <ResumeItem
          key={a.id_}
          replyToResume={onClickResume}
          id={a.id_}
          name={a.from_name}
          desc={a.description}
          dateTime={a.date_time}
        />
      )),
    [onClickResume, userBids],
  );

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>My resume</h2>
        <button onClick={() => setShowModal(true)} className={styles.edit}>
          <EditIcon />
        </button>
      </div>
      <ul>{config}</ul>
    </section>
  );
}
