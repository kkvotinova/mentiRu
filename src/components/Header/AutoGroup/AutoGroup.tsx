import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronIcon } from '../../icons';
import { userLogOut } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store/reducers';
import styles from './autogroup.scss';

import bell from '../../../resources/svg/bell.svg';
import signout from '../../../resources/svg/signout.svg';
import user from '../../../resources/svg/user.svg';
import avatar from '../../../resources/avatar.jpeg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export function AutoGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state: IState) => state.loadingStatus);
  const isLoading = 'loading' === loadingStatus;

  const navigate = useNavigate();
  const location = useLocation();
  const onLogout = () => {
    dispatch(userLogOut());
    localStorage.removeItem('auth');
    (location.pathname === '/profile') ? navigate(-1) : navigate(0);
  }

  return (
    <div className={styles.autoGroup}>
      {isLoading ? <Skeleton style={{marginRight: 46, height: 34, width: 34}}/> :
        <Link to="/profile" className={styles.bell}>
          <img src={bell} alt="bell" />
          <span>4</span>
        </Link>
      }
      <button onClick={() => setIsOpen(!isOpen)} className={styles.user}>
        {isLoading ? <Skeleton circle height={34} width={34}/> : <img src={avatar} alt="avatar" />}
        <span
          className={`${styles.span} ${isOpen ? styles.open : null}`}>
          {isLoading ? <Skeleton width={120}/> : "Nikita Sobolev"}
        </span>
        <ChevronIcon />
        <ul className={`${styles.list} ${isOpen ? styles.show : null}`}>
          <li><Link
                style={{ backgroundImage: 'url(' + user + ')'}}
                to="/profile">
                Profile</Link>
          </li>
          <li><a
            onClick={onLogout}
            style={{ backgroundImage: 'url(' + signout + ')'}}>
            Log out</a>
          </li>
        </ul>
      </button>
    </div>
  );
}
