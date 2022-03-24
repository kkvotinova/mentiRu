import React from 'react';
import styles from './modal.scss';

interface IModalProps {
  heading: string;
  children: React.ReactNode;
  onChange: (item: boolean) => void;
}

export function Modal(props: IModalProps) {
  const {onChange, children, heading} = props;

  return (
    <div
      onClick={() => onChange(false)}
      className={styles.modal}>
        <form
          onClick={(e) => e.stopPropagation()}
          style={(heading === 'Create resume') ? {padding: "20px 30px"} : undefined}
          className={styles.form}>
            <h3 className={styles.heading}>{heading}</h3>
            {children}
            <div className={styles.buttons}>
              <button
                type='reset'
                onClick={() => onChange(false)}
                className={styles.text}>Cancel</button>
              <button className={styles.primary} type="submit">Create</button>
            </div>
        </form>
    </div>
  );
}
