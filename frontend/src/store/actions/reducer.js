import {
  ACTION_CREATE_REQUEST,
  ACTION_CREATE_SUCCESS,
  ACTION_CREATE_FAILURE,
} from './actions'

const initialState = {
  items: [],
  fetching: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case ACTION_CREATE_REQUEST:
    return { ...state, fetching: true }
  case ACTION_CREATE_SUCCESS:
    return { ...state, item: payload.data, fetching: false }
  case ACTION_CREATE_FAILURE:
    return { ...state, fetching: false }

  default:
    return state
  }
}
