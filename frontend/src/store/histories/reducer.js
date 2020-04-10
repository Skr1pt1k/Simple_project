import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAILURE,
} from './actions'

const initialState = {
  items: [],
  fetching: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case HISTORY_GET_REQUEST:
    return { ...state }
  case HISTORY_GET_SUCCESS:
    return { ...state, items: payload.data, fetching: false }
  case HISTORY_GET_FAILURE:
    return { ...state, fetching: false }
  default:
    return state
  }
}
