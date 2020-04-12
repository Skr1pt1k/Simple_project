import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import notifications from '../../lib/notifications'
import {historyGetRequest} from '../histories/actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
  yield takeLatest(actions.ACTION_CREATE_REQUEST, watchResourceCreateRequest)
}

  function* watchResourceCreateRequest({ payload: { data } }) {
    try {
      const response = yield call(Api.Action.create, data)
      yield put(actions.actionCreateSuccess(response))
      notifications.createNotification('create-success')
      yield put(historyGetRequest(data.history_id))

    } catch (error) {
      yield put(actions.actionCreateFailure(error))
    }
  }
