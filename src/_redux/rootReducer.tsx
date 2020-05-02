import { History } from 'history'
import { combineReducers } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'

import {
  reducer as authenticationReducer,
  State as AuthenticationReducerState,
} from '_redux/auth'
import {
  reducer as loadingReducer,
  State as LoadingReducerState,
} from '_redux/loading'

import {
  reducer as snackbarReducer,
  State as SnackbarReducerState,
} from '_redux/snackbar'

export interface RootState {
  loadingIndicator: LoadingReducerState
  loginForm: AuthenticationReducerState
  snackbar: SnackbarReducerState
  routerReducer: RouterState
}

export default (history: History) =>
  combineReducers({
    loginForm: authenticationReducer,
    routerReducer,
    loadingIndicator: loadingReducer,
    snackbar: snackbarReducer,
  })
