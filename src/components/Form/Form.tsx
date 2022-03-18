import React from 'react';
import styles from './form.scss';
import { Input } from './Input';

interface IContentInput {
  label: string;
  type: string;
}

interface IContentProps {
  inputs: IContentInput[];
  primaryText: string;
  btnText: string;
  spanText: string;
  forgot?: boolean;
  disabled?: boolean;
}

export function Form(props: IContentProps) {
  const {inputs, primaryText, btnText, spanText, forgot, disabled} = props;
  const button = forgot ? <button className={styles.forgot}>Forgot password?</button> : null;

  return (
    <form>
      <div className={styles.form}>
        {inputs.map((input, id) => <Input key={id} input={input}/>)}
        {button}
      </div>
      <button className={styles.primary} disabled={disabled} type='submit'>{primaryText}</button>
      <div>
        <span className={styles.span}>{spanText}</span>
        <button className={styles.text}>{btnText}</button>
      </div>
    </form>
  );
}
