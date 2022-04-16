import React, { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './modal.scss';

interface IModalProps {
  showModal: boolean;
  heading: string;
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export function Modal(props: IModalProps) {
  const {setShowModal, showModal, children, heading} = props;

  return (
    <div
      onClick={() => setShowModal(false)}
      className={`${styles.modal} ${showModal ? styles.show : null}`}>
        <div  className={styles.div}>
          <form
            onClick={e => e.stopPropagation()}
            style={(heading === 'Create resume') ? {padding: "20px 30px"} : undefined}
            className={styles.form}>
              <h3 className={styles.heading}>{heading}</h3>
                {children}
                <div className={styles.buttons}>
                  <button
                    type='reset'
                    onClick={() => setShowModal(false)}
                    className={styles.text}>Cancel</button>
                  <button className={styles.primary} type="submit">Create</button>
                </div>
          </form>
        </div>
    </div>
  )
}
