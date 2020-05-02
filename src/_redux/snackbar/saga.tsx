import { put } from 'redux-saga/effects'
import { ShowSnackbar, ISnackbarPayload } from './actions'

export default function* snackbarSaga(payload: ISnackbarPayload) {
  yield put(ShowSnackbar(payload))
  // yield(put(Snackbar({ open: false })))
}
