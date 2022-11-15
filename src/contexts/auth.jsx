import { useState, createContext, useContext, useEffect } from 'react'

import { useRouter } from 'next/router'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {

  const router = useRouter()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  const login = (email, password) => {

    //console.log('login', { email, password })

    // create api to run session

    const loggedUser = {
      id: '123',
      email
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    if (password === "secret") {
      setUser(loggedUser)
      router.push("/")
    }
  }

  const logout = () => {
    console.log('logout')
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export const Private = ({ children }) => {

  const router = useRouter()

  const { authenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!authenticated) {
    router.push("/login")
  }

  return children
}


