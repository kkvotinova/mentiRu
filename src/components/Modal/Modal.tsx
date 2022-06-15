import React, { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContent as MentorContent } from '../../pages/MentorPage/ModalContent';
import { ModalContent as ProfileContent } from '../../pages/ProfilePage/ModalContent';
import styles from './modal.scss';

interface IModalProps {
  showModal: boolean;
  heading: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onSubmit: (data: any) => void;
}

export function Modal(props: IModalProps) {
  const { setShowModal, showModal, heading, onSubmit } = props;

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({ mode: 'onBlur' });

  const handleClearInput = useCallback(() => {
    setShowModal(false);
    clearErrors();
  }, [clearErrors, setShowModal]);

  return (
    <div
      onClick={() => setShowModal(false)}
      className={`${styles.modal} ${showModal ? styles.show : null}`}
    >
      <div className={styles.div}>
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit(onSubmit)}
          style={heading === 'Create resume' ? { padding: '20px 30px' } : undefined}
          className={styles.form}
        >
          <h3 className={styles.heading}>{heading}</h3>
          {heading === 'Create resume' ? (
            <ProfileContent />
          ) : (
            <MentorContent errors={errors} register={register} />
          )}
          <div className={styles.buttons}>
            <button type='reset' onClick={handleClearInput} className={styles.text}>
              Cancel
            </button>
            <button className={styles.primary} type='submit'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
