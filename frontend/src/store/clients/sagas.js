import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
  yield takeLatest(actions.CLIENTS_GET_REQUEST, watchResourceGetRequest),
  yield takeLatest(actions.CLIENT_CREATE_REQUEST, watchResourceCreateRequest)
}

function* watchResourceGetRequest() {
  try {
    const response = yield call(Api.Clients.get)
    yield put(actions.clientsGetSuccess(response))
  } catch (error) {
    yield put(actions.clientsGetFailure(error))
  }
}

function* watchResourceCreateRequest({ payload: { data } }) {
  try {
    const response = yield call(Api.Client.create, data)
    yield put(actions.clientCreateSuccess(response))
  } catch (error) {
    yield put(actions.clientCreateFailure(error))
  }
}
