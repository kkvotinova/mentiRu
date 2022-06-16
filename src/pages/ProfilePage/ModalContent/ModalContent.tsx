import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import { ICV } from '../../../store/reducers/mentor/type';
import { ModalContentProps } from '../../MentorPage/ModalContent';
import styles from './modalcontent.scss';

export function ModalContent({
  register,
  errors,
  cv,
}: ModalContentProps & {
  cv?: ICV;
}) {
  const loadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);

  const getCompetencies = useCallback(
    (grade: string) => {
      if (!cv?.cv_skills) return '';

      return cv.cv_skills.reduce((prev, current) => {
        if (current.grade !== grade) return prev;
        if (prev === '') return current.name;

        return prev + ', ' + current.name;
      }, '');
    },
    [cv?.cv_skills],
  );

  return (
    <ul className={styles.group}>
      <li className={styles.item}>
        <label>Place of work</label>
        <input
          {...register('work', { required: 'This field is required' })}
          placeholder='Place of work'
          defaultValue={cv?.job || ''}
        />
        <div>{errors.work && <p>{errors.work.message || 'Invalid data'}</p>}</div>
      </li>
      <li className={`${styles.item} ${styles.double}`}>
        <div className={styles.left}>
          <label>Experience</label>
          <input
            {...register('experience', { required: 'This field is required' })}
            placeholder='Experience'
            defaultValue={cv?.experience || ''}
          />
          <div>{errors.experience && <p>{errors.experience.message || 'Invalid data'}</p>}</div>
        </div>
        <div className={styles.right}>
          <label>Price</label>
          <input
            {...register('price', { required: 'This field is required' })}
            placeholder='Price'
            defaultValue={cv?.price || ''}
          />
          <div>{errors.price && <p>{errors.price.message || 'Invalid data'}</p>}</div>
        </div>
      </li>
      <li className={styles.item}>
        <label>About me</label>
        <textarea
          {...register('description', {
            required: 'This field is required',
            minLength: 100,
          })}
          placeholder='About me'
          defaultValue={cv?.about || ''}
        />
        <div>
          {errors.description && (
            <p>{errors.description.message || 'You must enter more than 100 characters'}</p>
          )}
        </div>
      </li>
      <li className={styles.heading}>Competencies</li>
      <li className={styles.item}>
        <label>Good</label>
        <input
          {...register('competencyGood', { required: 'This field is required' })}
          placeholder='Java, Python, PHP'
          defaultValue={getCompetencies('good')}
        />
        <div>
          {errors.competencyGood && <p>{errors.competencyGood.message || 'Invalid data'}</p>}
        </div>
      </li>
      <li className={styles.item}>
        <label>Average</label>
        <input
          {...register('competencyAverage', { required: 'This field is required' })}
          placeholder='Java, Python, PHP'
          defaultValue={getCompetencies('average')}
        />
        <div>
          {errors.competencyAverage && <p>{errors.competencyAverage.message || 'Invalid data'}</p>}
        </div>
      </li>
      <li className={styles.item}>
        <label>Bad</label>
        <input
          {...register('competencyBad', { required: 'This field is required' })}
          placeholder='Java, Python, PHP'
          defaultValue={getCompetencies('bad')}
        />
        <div>
          {errors.competencyBad && <p>{errors.competencyBad.message || 'Invalid data'}</p>}
          {loadingStatus === 'error' && !errors.competencyBad && (
            <p>Something went wrong. Try to reload the page</p>
          )}
        </div>
      </li>
    </ul>
  );
}
