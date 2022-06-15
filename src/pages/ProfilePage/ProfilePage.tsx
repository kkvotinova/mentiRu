import React, { useCallback, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Profile } from './Profile/Profile';
import { Requests } from './Requests';
import { ResumeList } from './ResumeList';
import styles from './profilepage.scss';

export function ProfilePage() {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Profile />
        <ResumeList setShowModal={setShowModal} />
        <Requests />
      </main>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        heading={'Create resume'}
        onSubmit={onSubmit}
      />
    </>
  );
}
