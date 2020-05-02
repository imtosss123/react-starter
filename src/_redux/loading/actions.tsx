import { MainActionTypes } from 'interfaces'

export const loadingAction = (payload: boolean) => ({
  type: MainActionTypes.LoadingAction,
  payload,
})
