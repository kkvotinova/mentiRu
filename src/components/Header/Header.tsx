import React from 'react';
import { Link } from 'react-router-dom';
import { AutoGroup } from './AutoGroup';
import { ButtonGroup } from './ButtonGroup';
import styles from './header.scss';

interface IContentProps {
  readonly isGroup?: boolean;
  readonly isAuth?: boolean;
}

export function Header(props: IContentProps) {
  const {isGroup = false, isAuth = false} = props;

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        menti<span>Ru</span>
      </Link>
      {isGroup ? <ButtonGroup /> : null}
      {isAuth ? <AutoGroup /> : null}
    </header>
  );
}
