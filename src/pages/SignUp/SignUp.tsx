import React from 'react';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../../resources/signup.png';
import { userSignUp } from '../../store/actions/user';
import { IState } from '../../store';
import styles from './signup.scss';

interface IContentInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  match: string;
  emailExist: string;
}

export function SignUp() {
  const userLoadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<IContentInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IContentInput> = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('match', {
        message: `Passwords don't match`,
      });
      return;
    }
    dispatch(userSignUp(data));
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <img className={styles.logo} src={logo} alt='signup' />
        <div className={styles.registration}>
          <h1 className={styles.header}>Registration</h1>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <label className={styles.label}>First name</label>
              <input
                {...register('firstName', { required: 'This field is required' })}
                placeholder='First name'
                className={styles.input}
              />
              <div style={{ height: 22 }}>
                {errors.firstName && <p>{errors.firstName.message || 'Error'}</p>}
              </div>
              <label className={styles.label}>Last name</label>
              <input
                {...register('lastName', { required: 'This field is required' })}
                placeholder='Last name'
                className={styles.input}
              />
              <div style={{ height: 22 }}>
                {errors.lastName && <p>{errors.lastName.message || 'Error'}</p>}
              </div>
              <label className={styles.label}>Email</label>
              <input
                {...register('email', {
                  required: 'This field is required',
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={styles.input}
                placeholder='Email'
                type='email'
              />
              <div style={{ height: 22 }}>
                {errors.email && <p>{errors.email.message || 'Invalid email'}</p>}
                {userLoadingStatus === 'error' && !errors.email ? (
                  <p>User already exists with such email</p>
                ) : null}
              </div>
              <label className={styles.label}>Password</label>
              <input
                {...register('password', {
                  required: 'This field is required',
                  minLength: 8,
                })}
                onChange={() => clearErrors('match')}
                className={styles.input}
                placeholder='Password'
              />
              <div style={{ height: 22 }}>
                {errors.password && <p>{errors.password.message || 'Invalid password'}</p>}
                {errors.match && <p>{errors.match.message}</p>}
              </div>
              <label className={styles.label}>Confrim password</label>
              <input
                {...register('confirmPassword', {
                  required: 'This field is required',
                  minLength: 8,
                })}
                onChange={() => clearErrors('match')}
                className={styles.input}
                placeholder='Confirm password'
              />
              <div style={{ height: 36 }}>
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message || 'Invalid password'}</p>
                )}
                {errors.match && <p>{errors.match.message}</p>}
              </div>
            </div>
            <button type='submit' className={styles.primary}>
              Sign up
            </button>
            <div>
              <span className={styles.span}>Already a member?</span>
              <Link className={styles.text} to={`/login`}>
                Log in
              </Link>
            </div>
          </form>
          {/* Form */}
        </div>
      </main>
    </>
  );
}
