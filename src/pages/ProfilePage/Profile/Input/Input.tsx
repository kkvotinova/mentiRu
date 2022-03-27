import React from 'react';
import styles from './input.scss';

interface IContentInput {
  label: string;
  type: string;
  value: string;
  onChange: (state: boolean) => void;
}

export function Input({label, type, value, onChange}: IContentInput) {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = e.target.value === value;
    onChange(state);
  }

  return (
    <li className={styles.item}>
      <label htmlFor={label.split(' ').join('-')}>{label}</label>
      <input
        onChange={(e) => inputChange(e)}
        id={label.split(' ').join('-')}
        type={type}
        defaultValue={value}/>
    </li>
  );
}
