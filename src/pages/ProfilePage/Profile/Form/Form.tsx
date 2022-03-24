import React, { useState } from 'react';
import { Input } from '../Input';
import styles from './form.scss';

interface IContentInput {
  label: string;
  type: string;
  value: string;
}

const INPUT_LIST: IContentInput[] = [
  {
    label: 'First name',
    type: 'text',
    value: 'Nikita'
  },
  {
    label: 'Last name',
    type: 'text',
    value: 'Sobolev'
  },
  {
    label: 'Email',
    type: 'email',
    value: 'mail@mail.com'
  },
  {
    label: 'Phone',
    type: 'phone',
    value: '12345678900'
  }
];

export function Form() {
  const [btn, setBtn] = useState(true);

  const onChange = (state: boolean) => {
    setBtn(state);
  }

  return (
    <form>
      <ul className={styles.list}>
        {INPUT_LIST.map((item, id) => <Input onChange={onChange} key={id} {...item} />)}
      </ul>
      <button className={styles.primary} type='submit' disabled={btn}>Save</button>
    </form>
  );
}
