import { apiBaseRoute } from 'config'
import { authHeader, handleResponse } from 'helpers'

const getAll = async () => {
  const requestOptions = { method: 'GET', headers: authHeader() }
  return fetch(`${apiBaseRoute}/users`, requestOptions as any).then(
    handleResponse
  )
}

export const userService = {
  getAll,
}
