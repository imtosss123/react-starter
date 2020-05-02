import { BehaviorSubject } from 'rxjs'

import { apiBaseRoute } from 'config'
import { handleResponse } from 'helpers'

const localUser = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject(
  localUser && JSON.parse(localUser)
)

const login = async (username: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }

  return fetch(`${apiBaseRoute}/v1/auth/sign-in`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user))
      currentUserSubject.next(user)

      return user
    })
}

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser')
  currentUserSubject.next(null)
}

export const authentication = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value
  },
}
