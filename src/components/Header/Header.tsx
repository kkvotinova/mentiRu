import React, { useState } from 'react';
import styles from './header.scss';
import bell from '../../resources/svg/bell.svg';
import { Link } from 'react-router-dom';
import signout from '../../resources/svg/signout.svg';
import user from '../../resources/svg/user.svg';
import avatar from '../../resources/avatar.jpeg';

interface IContentProps {
  isGroup?: boolean;
  isAuto?: boolean;
}

export function Header({isGroup = false, isAuto = false}: IContentProps) {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>menti<span>Ru</span></Link>
      {isGroup ? <Group /> : null}
      {isAuto ? <AutoGroup /> : null}
    </header>
  );
}

const AutoGroup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.autoGroup}>
      <a href="#" className={styles.bell}>
        <img src={bell} alt="bell" />
        <span>4</span>
      </a>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.user}>
        <img src={avatar} alt="avatar" />
        <span>Nikita Sobolev</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7101 8.21001C18.6171 8.11628 18.5065 8.04189 18.3846 7.99112C18.2628 7.94035 18.1321 7.91422 18.0001 7.91422C17.8681 7.91422 17.7374 7.94035 17.6155 7.99112C17.4936 8.04189 17.383 8.11628 17.2901 8.21001L12.7101 12.79C12.6171 12.8837 12.5065 12.9581 12.3846 13.0089C12.2628 13.0597 12.1321 13.0858 12.0001 13.0858C11.8681 13.0858 11.7373 13.0597 11.6155 13.0089C11.4936 12.9581 11.383 12.8837 11.2901 12.79L6.71006 8.21001C6.6171 8.11628 6.5065 8.04189 6.38464 7.99112C6.26278 7.94035 6.13207 7.91422 6.00006 7.91422C5.86805 7.91422 5.73734 7.94035 5.61548 7.99112C5.49362 8.04189 5.38302 8.11628 5.29006 8.21001C5.10381 8.39737 4.99927 8.65083 4.99927 8.91501C4.99927 9.1792 5.10381 9.43265 5.29006 9.62001L9.88006 14.21C10.4426 14.7718 11.2051 15.0874 12.0001 15.0874C12.7951 15.0874 13.5576 14.7718 14.1201 14.21L18.7101 9.62001C18.8963 9.43265 19.0009 9.1792 19.0009 8.91501C19.0009 8.65083 18.8963 8.39737 18.7101 8.21001V8.21001Z" fill="#1A2451"/>
        </svg>
        {isOpen ? (
          <ul className={styles.list}>
            <li><Link style={{ backgroundImage: 'url(' + user + ')'}} to="/profile">Profile</Link></li>
            <li><Link style={{ backgroundImage: 'url(' + signout + ')'}} to="/">Log out</Link></li>
          </ul>
        ) : null}
      </button>
    </div>
  );
}

const Group = () => {
  return (
    <div className={styles.group}>
      <Link to="/login" className={styles.secondary}>Log in</Link>
      <Link to="/signup" className={styles.primary}>Sign up</Link>
    </div>
  );
}
