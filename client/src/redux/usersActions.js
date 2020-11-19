export const ActionType = {
  GET_USERS: 'GET_USERS',
};

export const getUsersActions = users => ({
  type: ActionType.GET_USERS,
  payload: users,
});
