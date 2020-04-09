export const DEPARTAMENTS_GET_REQUEST = 'DEPARTAMENTS_GET_REQUEST'
export const DEPARTAMENTS_GET_SUCCESS = 'DEPARTAMENTS_GET_SUCCESS'
export const DEPARTAMENTS_GET_FAILURE = 'DEPARTAMENTS_GET_FAILURE'

export const departamentsGetRequest = () => ({
  type: DEPARTAMENTS_GET_REQUEST,
})

export const departamentsGetSuccess = payload => ({
  type: DEPARTAMENTS_GET_SUCCESS,
  payload
})

export const departamentsGetFailure = error => ({
  type: DEPARTAMENTS_GET_FAILURE,
  payload: error
})
