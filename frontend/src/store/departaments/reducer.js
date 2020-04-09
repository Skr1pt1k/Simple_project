import {
  DEPARTAMENTS_GET_REQUEST,
  DEPARTAMENTS_GET_SUCCESS,
  DEPARTAMENTS_GET_FAILURE,
} from './actions'

const initialState = {
  items: [],
  fetching: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case DEPARTAMENTS_GET_REQUEST:
    return { ...state }
  case DEPARTAMENTS_GET_SUCCESS:
    return { ...state, items: payload.data, fetching: false }
  case DEPARTAMENTS_GET_FAILURE:
    return { ...state, fetching: false }
  default:
    return state
  }
}
