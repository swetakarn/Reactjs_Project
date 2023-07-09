import * as types from "../Type/type";
export function getUser(users) {
  return {
    type: types.GET_USERS_REQUESTED,
    payload: users,
  }
}


export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users: users,
  };
}

export function getUsersFailed(message) {
  return {
    type: types.GET_USERS_FAILED,
    message: message,
  };
}
