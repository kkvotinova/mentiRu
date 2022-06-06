import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { userUpdateInfo } from '../../../../store/actions/user';
import { IUserInfo } from '../../../../store/reducers/user/type';
import styles from './form.scss';

interface IContentInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm<IContentInput>({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const [btn, setBtn] = useState(true);
  const userInfo = useSelector((state: IState) => state.user.userInfo);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      const values: IContentInput = getValues();
      const state = values[name as keyof IContentInput] === userInfo[name as keyof IUserInfo];
      setBtn(state);
    });
    return () => subscription.unsubscribe();
  }, [getValues, userInfo, watch]);

  const onSubmit: SubmitHandler<IContentInput> = (data) => {
    dispatch(userUpdateInfo(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label>First name</label>
          <input
            {...register('firstName', { required: 'This field is required' })}
            placeholder='First name'
            defaultValue={userInfo.firstName}
          />
          <div>{errors.firstName && <p>{errors.firstName.message || 'Error'}</p>}</div>
        </li>
        <li className={styles.item}>
          <label>Last name</label>
          <input
            {...register('lastName', { required: 'This field is required' })}
            placeholder='Last name'
            defaultValue={userInfo.lastName}
          />
          <div>{errors.lastName && <p>{errors.lastName.message || 'Error'}</p>}</div>
        </li>
        <li className={styles.item}>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'This field is required',
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type='email'
            placeholder='Email'
            defaultValue={userInfo.email || ''}
          />
          <div>{errors.email && <p>{errors.email.message || 'Invalid email'}</p>}</div>
        </li>
        <li className={styles.item}>
          <label>Phone</label>
          <input
            {...register('phone', {
              minLength: 10,
              maxLength: 12,
            })}
            type='phone'
            placeholder='Phone'
            defaultValue={userInfo.phone}
          />
          <div>{errors.phone && <p>{errors.phone.message || 'Invalid phone'}</p>}</div>
        </li>
      </ul>
      <button className={styles.primary} type='submit' disabled={btn}>
        Save
      </button>
    </form>
  );
}
