import { MainActionTypes } from 'interfaces'
import { Action } from 'redux'

export interface ISnackbarPayload {
  message: string
  label?: string
  toDispatchOnAction?: Action | null
}

export const ShowSnackbar = (payload: ISnackbarPayload) => ({
  type: MainActionTypes.SnackbarAction,
  payload,
})

export const HideSnackbar = () => ({
  type: MainActionTypes.HideSnackbarAction,
})
