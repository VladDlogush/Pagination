import { ActionType } from './usersActions';

const UsersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.GET_USERS:
      return [...state, ...payload];

    default:
      return state;
  }
};

export default UsersReducer;
