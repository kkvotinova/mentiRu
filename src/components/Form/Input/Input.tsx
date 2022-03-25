import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import styles from './input.scss';

interface IFormInput {
  label: string;
  type: string;
  value: string;
}

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
