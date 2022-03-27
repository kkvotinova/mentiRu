import React, { ChangeEvent } from 'react';
import styles from './input.scss';
import { IFormInput } from '../../../hooks/form.hooks'

interface IContentProps {
  formInput: IFormInput;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({formInput, onValueChange}: IContentProps) {
  const {label, type, value} = formInput;

  return (
    <>
      <label
        htmlFor={label.split(' ').join('-')}
        className={styles.label}>
        {label}</label>
      <input
        className={styles.input}
        id={label.split(' ').join('-')}
        required={true}
        name={type}
        type={type}
        value={value}
        placeholder={label}
        onChange={(e) => onValueChange(e)}
      />
    </>
  );
}
