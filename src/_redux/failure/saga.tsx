import { ErrorAction } from 'interfaces/error-actions'
import { takeEvery, fork, put, delay } from 'redux-saga/effects'
import { AuthActionTypes } from 'interfaces'
import { ShowSnackbar, HideSnackbar } from '_redux/snackbar'

function* failureSaga(action: ErrorAction) {
  yield put(
    ShowSnackbar({
      message: action.error,
    })
  )
  yield delay(3000)
  yield put(HideSnackbar())
}

function* onFailureWatcher() {
  yield takeEvery(`${AuthActionTypes.LoginFailureAction}`, failureSaga)
}
export default fork(onFailureWatcher)
