import React from 'react';
import { Header } from '../../components/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../actions';
import login from '../../resources/login.png';
import styles from './login.scss';

interface IContentInput {
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register, formState: {errors}, handleSubmit
  } = useForm<IContentInput>({mode: 'onBlur'});

  const onSubmit: SubmitHandler<IContentInput> = (data) => {
    navigate(-1);
    dispatch(userLogIn());
    localStorage.setItem('auth', 'true');
    // console.log(JSON.stringify(data));
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <img className={styles.logo} src={login} alt="login" />
        <div className={styles.authorization}>
          <h1 className={styles.header}>Authorization</h1>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <label className={styles.label}>Email</label>
              <input
                {...register('email', {
                  required: 'This field is required',
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                className={styles.input}
                placeholder='Email'
                type="email" />
              <div style={{height: 22}}>
                {errors.email && <p>{errors.email.message || "Invalid email"}</p>}
              </div>
              <label className={styles.label}>Password</label>
              <input
                {...register('password', {
                  required: 'This field is required',
                  minLength: 8
                })}
                className={styles.input}
                type="password"
                placeholder='Password' />
              <div style={{height: 16}}>
                {errors.password && <p>{errors.password.message || "Invalid password"}</p>}
              </div>
              <button className={styles.forgot}>Forgot password?</button>
            </div>
            <button type='submit' className={styles.primary}>Log in</button>
            <div>
              <span className={styles.span}>No account yet?</span>
              <Link className={styles.text} to={`/signup`}>Sign up</Link>
            </div>
          </form>
          {/* Form */}
        </div>
      </main>
    </>
  );
}
