import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Profile } from './Profile/Profile';
import { Requests } from './Requests';
import { ResumeList } from './ResumeList';
import styles from './profilepage.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { userGetInfo, userUpdateCV } from '../../store/actions/user';

export function ProfilePage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();
  const cvs = useSelector((state: IState) => state.user.userInfo.cvs);
  const userInfo = useSelector((state: IState) => state.user.userInfo);
  const userLoadingStatus = useSelector((state: IState) => state.user.userLoadingStatus);

  const [showModal, setShowModal] = useState(false);

  const onSubmit = useCallback(
    (data) => {
      const skillsGood = data.competencyGood.split(',').map((a: any) => ({
        grade: 'good',
        name: a,
      }));
      const skillsAverage = data.competencyAverage.split(',').map((a: any) => ({
        grade: 'average',
        name: a,
      }));
      const skillsBad = data.competencyBad.split(',').map((a: any) => ({
        grade: 'bad',
        name: a,
      }));

      if (cvs.length) {
        dispatch(
          userUpdateCV({
            cv_id: cvs[0].id_,
            about: data.description,
            experience: data.experience,
            category: cvs[0].category,
            job: data.work,
            price: data.price,
            skills: [...skillsGood, ...skillsAverage, ...skillsBad],
          }),
        );
      } else {
        // TODO
      }
    },
    [cvs, dispatch],
  );

  useEffect(() => {
    dispatch(userGetInfo());
  }, [dispatch]);

  return (
    <>
      <main className={styles.main}>
        <Profile isLoading={userLoadingStatus === 'loading'} userInfo={userInfo} />
        <ResumeList setShowModal={setShowModal} />
        <Requests />
      </main>
      <Modal
        cv={cvs[0]}
        showModal={showModal}
        setShowModal={setShowModal}
        heading={'Create resume'}
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        clearErrors={clearErrors}
        errors={errors}
      />
    </>
  );
}
