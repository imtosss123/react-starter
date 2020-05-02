import { all } from 'redux-saga/effects'

import authenticationSagas from '_redux/auth/saga'
import loadingSagas from '_redux/loading/saga'
import failureSagas from '_redux/failure/saga'

export default function* startForman() {
  yield all([loadingSagas, failureSagas, ...authenticationSagas])
}
