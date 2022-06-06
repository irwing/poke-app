const logout = ({ authContext }) => {
  const { auth, setAuth } = authContext

  setAuth({ token: null })
  return null

  // TODO: *** add fetch to API
}

export { logout }
