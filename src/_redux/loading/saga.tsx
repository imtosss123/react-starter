import { put } from 'redux-saga/effects'
import { loadingAction } from './actions'

export default function* loadingSaga(payload: boolean) {
  return yield put(loadingAction(payload))
}
