import {
  CLIENTS_GET_REQUEST,
  CLIENTS_GET_SUCCESS,
  CLIENTS_GET_FAILURE,
  CLIENT_CREATE_REQUEST,
  CLIENT_CREATE_SUCCESS,
  CLIENT_CREATE_FAILURE,
} from './actions'

const initialState = {
  items: [],
  fetching: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case CLIENTS_GET_REQUEST:
    return { ...state }
  case CLIENTS_GET_SUCCESS:
    return { ...state, items: payload.data, fetching: false }
  case CLIENTS_GET_FAILURE:
    return { ...state, fetching: false }
  case CLIENT_CREATE_REQUEST:
    return { ...state, fetching: true }
  case CLIENT_CREATE_SUCCESS:
    return { ...state, item: payload, fetching: false }
  case CLIENT_CREATE_FAILURE:
    return { ...state, fetching: false }
  default:
    return state
  }
}
