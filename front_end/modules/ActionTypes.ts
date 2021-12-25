// actionを識別するtypeを定義 実際のactionの値

export const ActionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  addPositiveRecord: 'ADD_RECORD',
  addNegativeRecord: 'NEGATIVE_RECORD',
  displayAdd: 'DISPLAY_ADD',

  // user
  loginRequest: 'LOGIN_REQUEST',
  loginReceiveSuccess: 'LOGIN_RECEIVE_SUCCESS',
  loginReceiveFailed: 'LOGIN_RECEIVE_FAILED',
  logout: 'LOGOUT'
} as const
