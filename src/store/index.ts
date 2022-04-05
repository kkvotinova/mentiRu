import { createStore, Store } from 'redux';
import { IState, reducer } from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const store: Store<IState> = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
