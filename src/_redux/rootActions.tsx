import * as AuthenticationActions from '_redux/auth/actions'
import * as SnackbarActions from '_redux/snackbar/actions'

export const ActionCreators = Object.assign(
  {},
  {
    ...AuthenticationActions,
    ...SnackbarActions,
  }
)
