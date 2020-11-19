import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import UsersReducer from './usersReducer';

const store = createStore(UsersReducer, devToolsEnhancer());

export default store;
