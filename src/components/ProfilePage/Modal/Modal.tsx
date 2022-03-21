import React from 'react';
import { Input } from './Input';
import styles from './modal.scss';

interface IContentProps {
  isShow: boolean;
  onChange: (item: boolean) => void;
}

export function Modal({isShow, onChange}: IContentProps) {
  return (
    <div
        onClick={() => onChange(false)}
        className={`${styles.modal} ${isShow ? styles.show : null}`}>
      <form
          onClick={(e) => e.stopPropagation()}
          className={styles.window}>
        <h3 className={styles.heading}>Create resume</h3>
        <Input />
        <div className={styles.group}>
          <button
              type='reset'
              className={styles.text}
              onClick={() => onChange(false)}>Cancel</button>
          <button type="submit" className={styles.primary}>Create</button>
      </div>
      </form>
    </div>
  );
}
