import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Profile } from './Profile/Profile';
import { Requests } from './Requests';
import { ResumeList } from './ResumeList';
import styles from './profilepage.scss';
import { ModalContent } from './ModalContent';

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
      {modal ? <Modal
                  onChange={onChange}
                  children={<ModalContent/>}
                  heading={'Create resume'}/>
              : null}
    </>
  );
}
