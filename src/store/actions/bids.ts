import { Dispatch } from 'redux';
import { headersCors } from '../../api';
import {
  ApiAnswerBid,
  BidsActions,
  BidsType,
  IBidsFetched,
  IBidsFetchedOther,
  IBidsFetchedPro,
  IBidsFetching,
  IBidsFetchingError,
} from '../reducers/bids/type';

export const bidsFetching = (): IBidsFetching => ({
  type: BidsActions.BIDS_FETCHING,
});
export const bidsFetchingError = (): IBidsFetchingError => ({
  type: BidsActions.BIDS_FETCHING_ERROR,
});
export const bidsFetchedOther = (): IBidsFetchedOther => ({
  type: BidsActions.BIDS_FETCHED_OTHER,
});
export const bidsFetched = (payload: BidsType[]): IBidsFetched => ({
  type: BidsActions.BIDS_FETCHED,
  payload,
});
export const bidsFetchedPro = (payload: BidsType[]): IBidsFetchedPro => ({
  type: BidsActions.BIDS_FETCHED_PRO,
  payload,
});

export const getUserBids = () => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(bidsFetching());

  fetch('/api/v1/bids/get_my_bids', {
    method: 'GET',
    headers: { ...headersCors, Authorization: accessToken },
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(bidsFetched(data.bids));
    })
    .catch((error: Error) => {
      dispatch(bidsFetchingError());
      console.log(error.message);
    });
};

export const getSentBids = () => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(bidsFetching());

  fetch('/api/v1/bids/get_sent_bids', {
    method: 'GET',
    headers: { ...headersCors, Authorization: accessToken },
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(bidsFetchedPro(data.bids));
    })
    .catch((error: Error) => {
      dispatch(bidsFetchingError());
      console.log(error.message);
    });
};

export const deleteBid = (id: string) => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(bidsFetching());

  fetch(`/api/v1/bids/delete_bid?id_=${id}`, {
    method: 'DELETE',
    headers: { ...headersCors, Authorization: accessToken },
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      dispatch(getSentBids());
    })
    .catch((error: Error) => {
      dispatch(bidsFetchingError());
      console.log(error.message);
    });
};

export const answerBid = (data: ApiAnswerBid) => (dispatch: Dispatch<any>) => {
  const accessToken = String(localStorage.getItem('accessToken'));
  dispatch(bidsFetching());

  fetch('/api/v1/bids/answer_bid', {
    method: 'POST',
    headers: { ...headersCors, Authorization: accessToken },
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    })
    .then(() => {
      dispatch(getUserBids());
    })
    .catch((error: Error) => {
      dispatch(bidsFetchingError());
      console.log(error.message);
    });
};
