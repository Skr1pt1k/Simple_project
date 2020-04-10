import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
  yield takeLatest(actions.HISTORY_GET_REQUEST, watchResourceGetRequest)
}

function* watchResourceGetRequest({ payload }) {
  try {
    const response = yield call(Api.History.get, payload)
    yield put(actions.historyGetSuccess(response))
  } catch (error) {
    yield put(actions.historyGetFailure(error))
  }
}
