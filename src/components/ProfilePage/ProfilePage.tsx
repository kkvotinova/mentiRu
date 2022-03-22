import React, { useState } from 'react';
import { Modal } from './Modal';
import { Profile } from './Profile/Profile';
import styles from './profilepage.scss';
import { Requests } from './Requests';
import { ResumeList } from './ResumeList';

export function ProfilePage() {
  const [modal, setModal] = useState(false);

  const onChange = (item: boolean) => {
    setModal(item);
  }

  return (
    <>
      <main className={styles.main}>
        <Profile/>
        <ResumeList onChange={onChange}/>
        <Requests />
      </main>
      <Modal isShow={modal} onChange={onChange}/>
    </>
  );
}
