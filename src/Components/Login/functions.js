const login = ({ authContext }) => {
  const { auth, setAuth } = authContext

  setAuth({ token: 'abc123' })
  return null

  // TODO: *** add fetch to API
}

export { login }
