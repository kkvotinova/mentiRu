import React from 'react';
import { Header } from '../../components/Header';
import styles from './login.scss';
import login from '../../resources/login.png';
import { Form } from '../../components/Form';

interface IContentInput {
  label: string;
  type: string;
  className?: any;
}

const INPUT_CONTENT: IContentInput[] = [
  {
    label: 'Email/Phone',
    type: 'text',
  },
  {
    label: 'Password',
    type: 'password',
  }
];

export function Login() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <img className={styles.logo} src={login} alt="login" />
        <div className={styles.authorization}>
          <h1 className={styles.header}>Authorization</h1>
          <Form
            inputs={INPUT_CONTENT}
            primaryText='Log in'
            btnText='Sign up'
            spanText='No account yet?'
            forgot={true}/>
        </div>
      </main>
    </>
  );
}
