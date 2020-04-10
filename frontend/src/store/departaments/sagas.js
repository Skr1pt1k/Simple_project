import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
  yield takeLatest(actions.DEPARTAMENTS_GET_REQUEST, watchResourceGetRequest)
}

function* watchResourceGetRequest() {
  try {
    const response = yield call(Api.Departaments.get)
    yield put(actions.departamentsGetSuccess(response))
  } catch (error) {
    yield put(actions.departamentsGetFailure(error))
  }
}
