import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IContentProps, useForm } from '../../hooks/form.hooks'
import { Input } from './Input';
import styles from './form.scss';

export function Form(props: IContentProps) {
  const {inputs, primaryText, btnText, spanText, forgot = false} = props;
  const {submit, formInput, onValueChange} = useForm(inputs);
  const navigate = useNavigate();

  return (
    <form onSubmit={submit}>
      <div className={styles.form}>
        {formInput.map((item, id) => (
          <Input
            key={id}
            formInput={item}
            onValueChange={onValueChange} />
        ))}
        {forgot ? <button className={styles.forgot}>Forgot password?</button> : null}
      </div>
      <button
        className={styles.primary}
        type='submit'
        onClick={() => navigate(-1)}>
        {primaryText}
        </button>
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
