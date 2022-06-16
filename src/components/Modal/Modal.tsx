import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  FieldValues,
  UseFormClearErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { ModalContent as MentorContent } from '../../pages/MentorPage/ModalContent';
import { ModalContent as ProfileContent } from '../../pages/ProfilePage/ModalContent';
import { ICV } from '../../store/reducers/mentor/type';
import styles from './modal.scss';

interface IModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;

  cv?: ICV;
  heading: string;
  onSubmit: (data: any) => void;

  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

export function Modal(props: IModalProps) {
  const {
    setShowModal,
    showModal,
    heading,
    onSubmit,
    register,
    handleSubmit,
    clearErrors,
    errors,
    cv,
  } = props;

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
            <ProfileContent cv={cv} errors={errors} register={register} />
          ) : (
            <MentorContent errors={errors} register={register} />
          )}
          <div className={styles.buttons}>
            <button type='reset' onClick={handleClearInput} className={styles.text}>
              Cancel
            </button>
            <button className={styles.primary} type='submit'>
              {heading === 'Create resume' ? (cv ? 'Update' : 'Create') : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
