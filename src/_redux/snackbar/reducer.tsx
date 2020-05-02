import { Action, MainActionTypes } from 'interfaces'
import { ISnackbarPayload } from './actions'

export interface State {
  open: boolean
  message?: string
}

const initialState: State = {
  open: false,
}

export const reducer = (
  state = initialState,
  action: Action<ISnackbarPayload>
) => {
  const { message } = (action && action.payload) || {}
  switch (action.type) {
    case MainActionTypes.SnackbarAction:
      return {
        open: true,
        message,
      }
    case MainActionTypes.HideSnackbarAction:
      return {
        open: false,
      }
    default:
      return state
  }
}
