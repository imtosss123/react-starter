import { Action, MainActionTypes } from 'interfaces'

export interface State {
  loading: boolean
}

const initialState: State = {
  loading: false,
}

export const reducer = (state = initialState, action: Action<boolean>) => {
  switch (action.type) {
    case MainActionTypes.LoadingAction:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
