import React from 'react';
import styles from './signup.scss';
import { Header } from '../Header';
import logo from '../../resources/signup.png';
import { Form } from '../Form';

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
      <Header isGroup={true}/>
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

/*   <main class="main">
    <img class="main-logo" src="/src/img/registration.png" alt="registration">
    <div class="registration">
      <h1 class="registration-header">Registration</h1>
      <form class="registration-form">
        <label for="first_name">First name</label>
        <input required id="first_name" type="text" placeholder="First name">
        <label for="last_name">Last name</label>
        <input required id="last_name" type="text" placeholder="Last name">
        <label for="email">Email</label>
        <input required id="email" type="email" placeholder="Email">
        <label for="password">Password</label>
        <input required id="password" type="text" placeholder="Password">
        <label for="confirm-password">Confirm password</label>
        <input required id="confirm-password" type="text" placeholder="Confirm password">
        <button class="primary" type="submit" disabled>Sign up</button>
        <div class="registration-form_footer">
          <span>Already a member?</span>
          <button class="text">Log in</button>
        </div>
      </form>
    </div>
  </main> */
