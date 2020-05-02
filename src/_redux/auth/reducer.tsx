import { Action, AuthActionTypes, LoginData, IUser } from 'interfaces'
import createReducer from '../createReducer'

export interface State {
  loading: boolean
  signingUpState: 'none' | 'pending' | 'done'
  resettingPassword: boolean
  user: IUser | null
  token: string | null
  error?: string
}

export const initialState: State = {
  loading: false,
  signingUpState: 'none',
  resettingPassword: false,
  user: null,
  token: null,
  error: undefined,
}

export const reducer = createReducer<State>(initialState, {
  [AuthActionTypes.LoginAction](state: State, action: Action<LoginData>) {
    return {
      ...state,
      loading: true,
    }
  },

  [AuthActionTypes.LoginFailureAction](state: State, action: Action<number>) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
  },

  [AuthActionTypes.LoginSuccessAction](
    state: State,
    action: Action<{ user: IUser; token: string }>
  ) {
    return {
      ...state,
      loading: false,
      error: null,
      user: action.payload.user,
      token: action.payload.token,
    }
  },
})
