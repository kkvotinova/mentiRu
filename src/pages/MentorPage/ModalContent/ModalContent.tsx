import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import styles from './modalcontent.scss';

export interface ModalContentProps {
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

export function ModalContent({ register, errors }: ModalContentProps) {
  const loadingStatus = useSelector((state: IState) => state.mentor.loadingStatus);

  return (
    <ul className={styles.group}>
      <li className={styles.item}>
        <label>Date & Time</label>
        <input
          {...register('date', { required: 'This field is required' })}
          type='datetime-local'
        />
        <div>{errors.date && <p>{errors.date.message || 'Invalid date'}</p>}</div>
      </li>
      <li className={styles.item}>
        <label>Description</label>
        <textarea
          placeholder='Description'
          {...register('description', {
            required: 'This field is required',
            minLength: 50,
          })}
        ></textarea>
        <div>
          {errors.description && (
            <p>{errors.description.message || 'You must enter more than 50 characters'}</p>
          )}
          {loadingStatus === 'error' && !errors.description && (
            <p>Something went wrong. Try to reload the page</p>
          )}
        </div>
      </li>
    </ul>
  );
}
