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

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
const sendMessageRequest = () => ({
  type: SEND_MESSAGE_REQUEST
});

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const sendMessageSuccess = (message) => ({
  type: SEND_MESSAGE_SUCCESS,
  message
});

export function sendMessage(userId, conversationId, messageBody) {
  return function (dispatch) {
    dispatch(sendMessageRequest());

    return fetch('/messages', {
      method: 'POST',
      body: JSON.stringify({user_id: userId, conversation_id: conversationId, body: messageBody}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred while sending the message: ', error)
      )
      .then(json => dispatch(sendMessageSuccess(json)))
  }
}

export const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
export const selectConversation = (conversationId) => ({
  type: SELECT_CONVERSATION,
  conversationId
});

export const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
export const newMessageReceived = (message) => ({
  type: NEW_MESSAGE_RECEIVED,
  message
});
