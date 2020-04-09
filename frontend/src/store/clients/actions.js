export const CLIENTS_GET_REQUEST = 'CLIENTS_GET_REQUEST'
export const CLIENTS_GET_SUCCESS = 'CLIENTS_GET_SUCCESS'
export const CLIENTS_GET_FAILURE = 'CLIENTS_GET_FAILURE'
export const CLIENT_CREATE_REQUEST = 'CLIENT_CREATE_REQUEST'
export const CLIENT_CREATE_SUCCESS = 'CLIENT_CREATE_SUCCESS'
export const CLIENT_CREATE_FAILURE = 'CLIENT_CREATE_FAILURE'

export const clientsGetRequest = () => ({
  type: CLIENTS_GET_REQUEST,
})

export const clientsGetSuccess = payload => ({
  type: CLIENTS_GET_SUCCESS,
  payload
})

export const clientsGetFailure = error => ({
  type: CLIENTS_GET_FAILURE,
  payload: error
})

export const clientCreateRequest = payload => ({
  type: CLIENT_CREATE_REQUEST,
  payload
})

export const clientCreateSuccess = payload => ({
  type: CLIENT_CREATE_SUCCESS,
  payload
})

export const clientCreateFailure = error => ({
  type: CLIENT_CREATE_FAILURE,
  error
})
