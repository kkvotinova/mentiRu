import React from 'react';
import styles from './signup.scss';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import logo from '../../resources/signup.png';

interface IContentInput {
  label: string;
  type: string;
}

const INPUT_CONTENT: IContentInput[] = [
  {
    label: 'First name',
    type: 'text',
  },
  {
    label: 'Last name',
    type: 'text',
  },
  {
    label: 'Email',
    type: 'email',
  },
  {
    label: 'Password',
    type: 'password',
  },
  {
    label: 'Confirm password',
    type: 'password',
  }
];

export function SignUp() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <img className={styles.logo} src={logo} alt="signup" />
        <div className={styles.registration}>
          <h1 className={styles.header}>Registration</h1>
          <Form
            inputs={INPUT_CONTENT}
            primaryText='Sign up'
            btnText='Log in'
            spanText='Already a member?' />
        </div>
      </main>
    </>
  );
}
