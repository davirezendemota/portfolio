import Link from "next/link"
import { useEffect, useState, useContext } from "react"

import { AuthContext } from "../contexts/auth"

export default function Login() {

  const { authenticated, login } = useContext(AuthContext)

  const [form, updateForm] = useState([])

  async function handleSubmit(event) {

    event.preventDefault()

    const { email, password } = form

    //console.log(email, password)

    login(email, password)

    // await fetch('api/users', {
    //   method: 'POST',
    //   body: JSON.stringify(user)
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))

  }

  function handleForm(event) {

    const value = event.target.value

    updateForm((fields) => ({
      ...fields,
      [event.target.name]: value
    }))

  }


  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-primary-700 rounded-md p-8 flex flex-col gap-4">

        <p className="text-2xl text-white">Login</p>

        <form
          onSubmit={handleSubmit}
          className="shrink flex flex-col w-full gap-2">
          <input
            onChange={handleForm}
            name="email"
            type="text"
            placeholder="Email"
            className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-whgite border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <input
            onChange={handleForm}
            name="password"
            type="text"
            placeholder="Password"
            className="flex-1 text-gray-700 bg-primary-200 rounded-md hover:bg-whgite border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-primary-400 hover:bg-primary-600 outline-none py-2 px-4 text-white font-semibold rounded-md">
            Entrar
          </button>
        </form>
        <Link href="/" className="text-white">Back to Home page</Link>
      </div>
    </div>
  )
}