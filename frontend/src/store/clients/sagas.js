import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import notifications from '../../lib/notifications'

import Api from '../../lib/api'

export default function* watcherSaga() {
  yield takeLatest(actions.CLIENTS_GET_REQUEST, watchResourceGetRequest),
  yield takeLatest(actions.CLIENT_CREATE_REQUEST, watchResourceCreateRequest),
  yield takeLatest(actions.CLIENT_UPDATE_REQUEST, watchResourceUpdateRequest),
  yield takeLatest(actions.CLIENT_DELETE_REQUEST, watchResourceDeleteRequest)

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
      notifications.createNotification('create-success')
      yield put(actions.clientsGetRequest())
    } catch (error) {
      yield put(actions.clientCreateFailure(error))
    }
  }

  function* watchResourceUpdateRequest({ payload }) {
    try {
      const response = yield call(Api.Client.update, payload)

      yield put(actions.clientUpdateSuccess(response))
      notifications.createNotification('update-success')
      yield put(actions.clientsGetRequest())
    } catch (error) {
      yield put(actions.clientUpdateFailure(error))
    }
  }

  function* watchResourceDeleteRequest({ payload }) {
    try {
      const response = yield call(Api.Client.delete, payload)
      yield put(actions.clientDeleteSuccess(response))
      notifications.createNotification('delete-success')
      yield put(actions.clientsGetRequest())
    } catch (error) {
      yield put(actions.clientDeleteFailure(error))
    }
  }
}
