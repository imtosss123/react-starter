import { put, takeLatest, fork, call } from 'redux-saga/effects'

import { createApiCall, loginRoute, MethodType } from 'services'
import { setCookie } from 'utils/cookies'
import { LoginData, AuthActionTypes } from 'interfaces'
import { LoginSuccess, LoginFailure } from './actions'

// login
function* loginSaga({ payload }: { payload: LoginData }) {
  try {
    const response = yield call(createApiCall, {
      method: MethodType.POST,
      url: loginRoute,
      data: payload,
    })

    if (response.status === 'ok' || response.token) {
      setCookie('token', response.token)
      yield put(LoginSuccess(response))
    } else {
      throw new Error(response.message || 'Something went wrong')
    }
  } catch (error) {
    yield put(LoginFailure(error.message))
  }
}
function* onLoginSubmitWatcher() {
  yield takeLatest(AuthActionTypes.LoginAction as any, loginSaga)
}

export default [fork(onLoginSubmitWatcher)]
