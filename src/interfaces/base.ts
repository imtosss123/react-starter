import { AuthActionTypes, MainActionTypes } from './redux-actions'

export interface ILocation {
  pathname: string
}

export interface ILogo {
  innerLink: string
  outterLink?: string
  imgAlt: string
  imgSrc: string
}

export interface Action<T> {
  type: AuthActionTypes | MainActionTypes
  payload: T
}

export interface Todo {
  id: number
  text: string
  completed: boolean
}
