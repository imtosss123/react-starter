import { apiBaseRoute } from 'config'

import { getCookie } from 'utils/cookies'

export enum MethodType {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const loginRoute = `/v1/auth/sign-in`

export const createApiCall = async ({
  method = 'GET',
  url = '',
  data = {},
  auth = false,
}) => {
  const headers: any = {
    'Content-Type': 'application/json',
  }
  if (auth) {
    headers['Authorization'] = getCookie('token')
  }
  return fetch(`${apiBaseRoute}${url}`, {
    body: method === 'GET' ? undefined : JSON.stringify(data),
    cache: 'no-cache',
    headers,
    method,
  })
    .then((response) => response.json())
    .then((result) => result)
}
