import { Dispatch } from 'redux';
import { headersCors } from '../../api';

import {
  ICV,
  ICVUser,
  IMentorFetched,
  IMentorFetching,
  IMentorFetchingError,
  IMentorState,
  MentorActions,
  MentorSendRequestData,
  OtherDataFetching,
} from '../reducers/mentor/type';

export const mentorFetching = (): IMentorFetching => ({
  type: MentorActions.MENTOR_FETCHING,
});
export const mentoryFetchingError = (): IMentorFetchingError => ({
  type: MentorActions.MENTOR_FETCHING_ERROR,
});
export const mentorFetched = (payload: {
  cv: ICV | undefined;
  user: ICVUser | undefined;
}): IMentorFetched => ({
  type: MentorActions.MENTOR_FETCHED,
  payload,
});
export const otherDataFetched = (): OtherDataFetching => ({
  type: MentorActions.OTHER_DATA_FETCHED,
});

export const getCategoryMentor = (query: string) => (dispatch: Dispatch<any>) => {
  dispatch(mentorFetching());
  fetch(`/api/v1/cv/get_cv?cv_id=${query}`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(mentorFetched(data));
    })
    .catch((error: Error) => {
      dispatch(mentoryFetchingError());
      console.log(error.message);
    });
};

export const sendMentorRequest = (data: MentorSendRequestData) => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));

  dispatch(mentorFetching());
  fetch('/api/v1/bids/send_bid', {
    method: 'POST',
    headers: {
      ...headersCors,
      Authorization: accessToken,
    },
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      dispatch(otherDataFetched());
    })
    .catch((error: Error) => {
      dispatch(mentoryFetchingError());
      console.log(error.message);
    });
};
