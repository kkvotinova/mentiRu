import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditIcon } from '../../../components/icons/EditIcon';
import { IState } from '../../../store';
import { answerBid, getUserBids } from '../../../store/actions/bids';
import { ResumeStatus } from '../../../utils/constants';
import { ResumeItem } from './ResumeItem';
import styles from './resumelist.scss';

interface IContentProp {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export function ResumeList({ setShowModal }: IContentProp) {
  const dispatch = useDispatch();
  const userBids = useSelector((state: IState) => state.bids.userBids);

  const onClickResume = useCallback(
    (id: string, status: ResumeStatus) => {
      dispatch(
        answerBid({
          bid_id: id,
          status,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getUserBids());
  }, [dispatch]);

  const config = useMemo(() => {
    const notSeenResume = userBids.filter((a) => a.status === 'not seen');

    return notSeenResume.map((a) => (
      <ResumeItem
        key={a.id_}
        replyToResume={onClickResume}
        id={a.id_}
        name={a.from_name}
        desc={a.description}
        dateTime={a.date_time}
      />
    ));
  }, [onClickResume, userBids]);

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
