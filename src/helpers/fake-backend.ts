export const configureFakeBackend = () => {
  let users = [
    {
      id: 1,
      username: 'test',
      password: 'test',
      firstName: 'Test',
      lastName: 'User',
    },
  ]
  let realFetch = window.fetch
  window.fetch = function (url, opts) {
    const isLoggedIn =
      opts &&
      opts.headers &&
      (opts.headers as any)['Authorization'] === 'Bearer fake-jwt-token'

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate - public
        if (
          (url as any).endsWith('/users/authenticate') &&
          opts!.method === 'POST'
        ) {
          const params = JSON.parse((opts as any).body)
          const user = users.find(
            (x) =>
              x.username === params.username && x.password === params.password
          )
          if (!user) return error('Username or password is incorrect')
          return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token',
          })
        }

        // get users - secure
        if ((url as any).endsWith('/users') && opts!.method === 'GET') {
          if (!isLoggedIn) return unauthorised()
          return ok(users)
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response))

        // private helper functions

        function ok(body: any) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(body)),
          } as any)
        }

        function unauthorised() {
          resolve({
            status: 401,
            text: () =>
              Promise.resolve(JSON.stringify({ message: 'Unauthorised' })),
          } as any)
        }

        function error(message: any) {
          resolve({
            status: 400,
            text: () => Promise.resolve(JSON.stringify({ message })),
          } as any)
        }
      }, 500)
    })
  }
}
