/* eslint-disable import/prefer-default-export */

export const USER_LOGIN = 'USER_LOGIN';
export const login = (userId, userName) => ({
  type: USER_LOGIN,
  userid,
  userName
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const logout = () => ({
  type: USER_LOGOUT,
});

export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
const requestUsers = () => ({
  type: LOAD_USERS_REQUEST
});

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
const receiveUsers = (users) => ({
  type: LOAD_USERS_SUCCESS,
  users
});

export function loadUsers() {
  return function (dispatch) {
    dispatch(requestUsers());

    return fetch('http://localhost:3000/users.json', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred while creating a deck: ', error)
      )
      .then(json => dispatch(receiveUsers(json)));
  };
}
