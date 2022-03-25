import React from 'react';
import { Link } from 'react-router-dom';
import styles from './form.scss';
import { Input } from './Input';
import { IContentProps, useForm } from '../../hooks/form.hooks'

export function Form(props: IContentProps) {
  const {inputs, primaryText, btnText, spanText, forgot = false} = props;
  const {submit, formInput, onValueChange} = useForm(inputs);

  const button = forgot ? <button className={styles.forgot}>Forgot password?</button> : null;
  return (
    <form onSubmit={submit}>
      <div className={styles.form}>
        {formInput.map((item, id) => (
          <Input
            key={id}
            formInput={item}
            onValueChange={onValueChange} />
        ))}
        {button}
      </div>
      <button
        className={styles.primary}
        type='submit'>
        {primaryText}</button>
      <div>
        <span className={styles.span}>{spanText}</span>
        <Link
          to={`/${btnText.split(' ').join('').toLowerCase()}`}
          className={styles.text}>
          {btnText}</Link>
      </div>
    </form>
  );
}
