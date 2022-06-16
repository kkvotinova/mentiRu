import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Profile } from './Profile';
import { Competencies } from './Competencies';
import { Modal } from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ICompetencies } from './Competencies/CompetenceItem';
import { IState } from '../../store';
import styles from './mentorpage.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import { getCategoryMentor, sendMentorRequest } from '../../store/actions/mentor';
import { getFullName } from '../../utils/format';
import { SubmitHandler, useForm } from 'react-hook-form';

export function MentorPage() {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({ mode: 'onBlur' });

  const mentor = useSelector((state: IState) => state.mentor);
  const isLoading = 'loading' === mentor.loadingStatus;
  const isError = 'error' === mentor.loadingStatus;

  useEffect(() => {
    dispatch(getCategoryMentor(params.id as string));
  }, [dispatch, params.id]);

  const profileConfig = useMemo(() => {
    const name = getFullName(mentor.user?.first_name as string, mentor.user?.last_name as string);
    const info = [
      {
        title: 'Experience',
        desc: mentor.cv?.experience as string,
      },
      {
        title: 'Price (per hour)',
        desc: mentor.cv?.price as string,
      },
      {
        title: 'Received help',
        desc: String(mentor.cv?.help_count),
      },
    ];

    return {
      name,
      job: mentor.cv?.job as string,
      info,
    };
  }, [mentor]);

  const competencies: ICompetencies[] = useMemo(
    () =>
      mentor.cv
        ? mentor.cv?.cv_skills.map((a) => ({
            skill: a.grade,
            name: a.name,
          }))
        : [
            {
              skill: 'bad',
              name: 'Error',
            },
          ],
    [mentor],
  );

  const onSubmit: SubmitHandler<{ date: string; description: string }> = useCallback(
    async (data) => {
      const date = new Date(data.date);

      dispatch(
        sendMentorRequest({
          to_id: mentor.user?.id_ as string,
          description: data.description,
          date_time: date.getTime() / 1000,
        }),
      );
    },
    [dispatch, mentor],
  );

  useEffect(() => {
    if (mentor.loadingStatus === 'cool') {
      setShowModal(false);
    }
  }, [mentor.loadingStatus]);

  return (
    <>
      <main className={styles.main}>
        {isError ? (
          <div className={styles.errorMessage}>Something went wrong. Try to reload the page</div>
        ) : (
          <>
            <Profile setShowModal={setShowModal} {...profileConfig} />
            <section className={styles.section}>
              <h2>About me</h2>
              {isLoading ? <Skeleton count={10} /> : <p>{mentor.cv?.about}</p>}
            </section>
            <Competencies {...competencies} />
          </>
        )}
      </main>
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        clearErrors={clearErrors}
        showModal={showModal}
        setShowModal={setShowModal}
        heading={'New request'}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
}
