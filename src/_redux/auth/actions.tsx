import { LoginData, AuthActionTypes, IUser } from 'interfaces'

export const Login = (payload: LoginData) => ({
  type: AuthActionTypes.LoginAction,
  payload,
})

export const LoginSuccess = (payload: { user: IUser; token: string }) => ({
  type: AuthActionTypes.LoginSuccessAction,
  payload,
})

export const LoginFailure = (error: string) => ({
  type: AuthActionTypes.LoginFailureAction,
  error,
})
