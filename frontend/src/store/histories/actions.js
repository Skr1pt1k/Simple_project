export const HISTORY_GET_REQUEST = 'HISTORY_GET_REQUEST'
export const HISTORY_GET_SUCCESS = 'HISTORY_GET_SUCCESS'
export const HISTORY_GET_FAILURE = 'HISTORY_GET_FAILURE'

export const historyGetRequest = payload => ({
  type: HISTORY_GET_REQUEST,
  payload
})

export const historyGetSuccess = payload => ({
  type: HISTORY_GET_SUCCESS,
  payload
})

export const historyGetFailure = error => ({
  type: HISTORY_GET_FAILURE,
  payload: error
})
