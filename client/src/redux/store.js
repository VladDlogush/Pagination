import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import usersReducer from './users/usersReducer';

const store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
