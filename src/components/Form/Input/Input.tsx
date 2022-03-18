import React from 'react';
import styles from './input.scss';

interface IContentInput {
  label: string;
  type: string;
}

interface IContentProps {
  input: IContentInput;
}

export function Input({input}: IContentProps) {
  const {label, type} = input;
  return (
    <>
      <label className={styles.label} htmlFor={label.split(' ').join('-')}>{label}</label>
      <input className={styles.input} id={label.split(' ').join('-')} required={true} type={type} />
    </>
  );
}
