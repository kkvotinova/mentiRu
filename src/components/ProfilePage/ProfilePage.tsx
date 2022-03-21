import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
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
      <Header isAuto={true} isGroup={true}/>
      <main className={styles.main}>
        <Profile/>
        <ResumeList onChange={onChange}/>
        <Requests />
      </main>
      <Footer />
      <Modal isShow={modal} onChange={onChange}/>
    </>
  );
}
