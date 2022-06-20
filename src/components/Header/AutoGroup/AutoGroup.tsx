import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronIcon } from '../../icons';
import { userLogOut } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store';
import styles from './autogroup.scss';

import bell from '../../../resources/svg/bell.svg';
import signout from '../../../resources/svg/signout.svg';
import user from '../../../resources/svg/user.svg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getFullName } from '../../../utils/format';

export function AutoGroup() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const userInfo = useSelector((state: IState) => state.user.userInfo);
  const userBids = useSelector((state: IState) => state.bids.userBids);

  const userLoadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const isLoading = 'loading' === userLoadingStatus;

  const onLogout = useCallback(() => {
    dispatch(userLogOut());
    localStorage.removeItem('auth');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }, [dispatch]);

  const notSeenBids = useMemo(() => userBids.filter((a) => a.status === 'not seen'), [userBids]);

  return (
    <div className={styles.autoGroup}>
      {isLoading ? (
        <Skeleton style={{ marginRight: 46, height: 34, width: 34 }} />
      ) : (
        <Link to='/profile' className={styles.bell}>
          <img src={bell} alt='bell' />
          {notSeenBids.length ? <span>{notSeenBids.length}</span> : null}
        </Link>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.user}>
        {isLoading ? (
          <Skeleton circle height={34} width={34} />
        ) : (
          <img src={userInfo.avatar} alt='avatar' />
        )}
        <span className={`${styles.span} ${isOpen ? styles.open : null}`}>
          {isLoading ? (
            <Skeleton width={120} />
          ) : (
            getFullName(userInfo.firstName, userInfo.lastName)
          )}
        </span>
        <ChevronIcon />
        <ul className={`${styles.list} ${isOpen ? styles.show : null}`}>
          <li>
            <Link style={{ backgroundImage: 'url(' + user + ')' }} to='/profile'>
              Profile
            </Link>
          </li>
          <li onClick={onLogout}>
            <a style={{ backgroundImage: 'url(' + signout + ')' }}>Log out</a>
          </li>
        </ul>
      </button>
    </div>
  );
}
