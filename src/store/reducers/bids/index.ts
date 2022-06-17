import { Reducer } from 'redux';
import { BidsActions, IBidsAction, IBidsState } from './type';

const initialState: IBidsState = {
  loadingStatus: 'loading',
  userBids: [],
  sentBids: [],
};

export const bidsReducer: Reducer = (state = initialState, action: IBidsAction): IBidsState => {
  switch (action.type) {
    case BidsActions.BIDS_FETCHING:
      return {
        ...state,
        loadingStatus: 'loading',
      };
    case BidsActions.BIDS_FETCHED:
      return {
        ...state,
        loadingStatus: 'idle',
        userBids: action.payload,
      };
    case BidsActions.BIDS_FETCHED_PRO:
      return {
        ...state,
        loadingStatus: 'idle',
        sentBids: action.payload,
      };
    case BidsActions.BIDS_FETCHING_ERROR:
      return {
        ...state,
        loadingStatus: 'error',
      };
    default:
      return state;
  }
};
