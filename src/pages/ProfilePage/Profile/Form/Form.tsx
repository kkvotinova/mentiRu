import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { Input } from '../Input';
import styles from './form.scss';

interface IContentInput {
  label: string;
  type: string;
  value: string;
}

export function Form() {
  const [btn, setBtn] = useState(true);
  const userInfo = useSelector((state: IState) => state.user.userInfo);
  const inputList: IContentInput[] = [
    {
      label: 'First name',
      type: 'text',
      value: userInfo.firstName
    },
    {
      label: 'Last name',
      type: 'text',
      value: userInfo.lastName
    },
    {
      label: 'Email',
      type: 'email',
      value: userInfo.email
    },
    {
      label: 'Phone',
      type: 'phone',
      value: userInfo.phone
    }
  ];

  const onChange = (state: boolean) => {
    setBtn(state);
  }

  return (
    <form>
      <ul className={styles.list}>
        {inputList.map((item, id) => <Input onChange={onChange} key={id} {...item} />)}
      </ul>
      <button className={styles.primary} type='submit' disabled={btn}>Save</button>
    </form>
  );
}
