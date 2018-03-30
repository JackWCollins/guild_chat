/* eslint-disable import/prefer-default-export */

export const USER_LOGIN = 'USER_LOGIN';
export const login = (userId, userName) => ({
  type: USER_LOGIN,
  userId,
  userName
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const logout = () => ({
  type: USER_LOGOUT,
});

export const LOAD_CONVERSATIONS_REQUEST = 'LOAD_CONVERSATIONS_REQUEST';
const requestConversations = () => ({
  type: LOAD_CONVERSATIONS_REQUEST
});

export const LOAD_CONVERSATIONS_SUCCESS = 'LOAD_CONVERSATIONS_SUCCESS';
const receiveConversations = (conversations) => ({
  type: LOAD_CONVERSATIONS_SUCCESS,
  conversations
});

export function loadConversations(userId) {
  return function (dispatch) {
    dispatch(requestConversations());

    return fetch('/users/'+userId+'/conversations', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred while loading user conversations: ', error)
      )
      .then(json => dispatch(receiveConversations(json)));
  };
}
