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

  const login = async (email, password) => {

    // create api to run session

    //verify if user exists
    const response = await fetch(`/api/users/${email}/${password}`)
    .then(res => res.json())
    .catch(() => location.reload())

    const loggedUser = response.data

    localStorage.setItem('user', JSON.stringify(loggedUser))

    setUser(loggedUser)
    router.push("/")
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
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


