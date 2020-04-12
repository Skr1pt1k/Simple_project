export const ACTION_CREATE_REQUEST = 'ACTION_CREATE_REQUEST'
export const ACTION_CREATE_SUCCESS = 'ACTION_CREATE_SUCCESS'
export const ACTION_CREATE_FAILURE = 'ACTION_CREATE_FAILURE'

export const actionCreateRequest = payload => ({
  type: ACTION_CREATE_REQUEST,
  payload
})

export const actionCreateSuccess = payload => ({
  type: ACTION_CREATE_SUCCESS,
  payload
})

export const actionCreateFailure = error => ({
  type: ACTION_CREATE_FAILURE,
  error
})
