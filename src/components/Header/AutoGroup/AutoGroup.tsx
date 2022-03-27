import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { ChevronIcon } from '../../icons';
import styles from './autogroup.scss';
import bell from '../../../resources/svg/bell.svg';
import signout from '../../../resources/svg/signout.svg';
import user from '../../../resources/svg/user.svg';
import avatar from '../../../resources/avatar.jpeg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export function AutoGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const {setIsAuth, isLoading} = useContext(AuthContext);

  const onLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
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
          <li><Link
                onClick={onLogout}
                style={{ backgroundImage: 'url(' + signout + ')'}}
                to="/">
                Log out</Link>
          </li>
        </ul>
      </button>
    </div>
  );
}
