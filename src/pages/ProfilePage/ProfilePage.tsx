import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Profile } from './Profile/Profile';
import { Requests } from './Requests';
import { ResumeList } from './ResumeList';
import styles from './profilepage.scss';
import { ModalContent } from './ModalContent';

export function ProfilePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <Profile />
        <ResumeList setShowModal={setShowModal} />
        <Requests />
      </main>
      <Modal showModal={showModal} setShowModal={setShowModal} heading={'Create resume'}>
        <ModalContent />
      </Modal>
    </>
  );
}
