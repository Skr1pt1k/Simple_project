import { fork, all } from 'redux-saga/effects'
import authSaga from './auth/sagas'

export function* rootWatcherSaga() {
  yield all([
    fork(authSaga)
  ])
}
