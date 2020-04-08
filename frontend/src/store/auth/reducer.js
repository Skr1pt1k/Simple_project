import {
  SESSION_CREATE_REQUEST,
  SESSION_CREATE_SUCCESS,
  SESSION_CREATE_FAILURE,
  SESSION_DELETE_REQUEST,
  SESSION_DELETE_SUCCESS,
  SESSION_DELETE_FAILURE,
  SESSION_RESTORE_REQUEST,
  SESSION_RESTORE_SUCCESS,
  SESSION_RESTORE_FAILURE
} from './actions'

const initialState = {
  currentSession: {},
  fetching: true,
  authenticated: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SESSION_CREATE_REQUEST:
    return { ...state, error: '' }
  case SESSION_CREATE_SUCCESS:
    return {
      ...state,
      currentSession: payload,
      authenticated: true,
      fetching: false
    }
  case SESSION_CREATE_FAILURE:
    return { ...state, fetching: false, error: payload.response.data.errors }
  case SESSION_DELETE_REQUEST:
    return { ...state }
  case SESSION_DELETE_SUCCESS:
    return {
      ...state,
      authenticated: false,
      fetching: false
    }
  case SESSION_DELETE_FAILURE:
    return { ...state, fetching: false }
  case SESSION_RESTORE_REQUEST:
    return { ...state }
  case SESSION_RESTORE_SUCCESS:
    return {
      ...state,
      currentSession: payload,
      authenticated: true,
      fetching: false
    }
  case SESSION_RESTORE_FAILURE:
    return {
      ...state,
      authenticated: false,
      fetching: false
    }
  default:
    return state
  }
}
