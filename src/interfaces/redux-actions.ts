export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LoginSuccessAction = '[Auth] Login Success',
  LoginFailureAction = '[Auth] Login Failure',
  LogoutAction = '[Auth] Logout',
}

export enum MainActionTypes {
  LoadingAction = '[Main] Loading',
  DestroySessionAction = '[Main] Destroy Session',
  SnackbarAction = '[Main] Snackbar',
  HideSnackbarAction = '[Main Hide Snackbar]',
}
