import Link from "next/link"
import { useState, useContext } from "react"

import { AuthContext } from "../contexts/auth"

export default function SignUp() {

  const { login } = useContext(AuthContext)
  const [form, updateForm] = useState()

  async function handleSubmit(event) {

    event.preventDefault()

    await fetch('api/users', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(({ email, password }) => { login(email, password) })
      .catch(json => console.log(json))

  }

  function handleForm(event) {

    updateForm((fields) => ({
      ...fields,
      [event.target.name]: event.target.value
    }))

  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-primary-700 rounded-md p-8 flex flex-col gap-4">

        <p className="text-2xl text-white">Sign Up</p>

        <form
          onSubmit={handleSubmit}
          className="shrink flex flex-col w-full gap-2 py-2"
        >
          <input
            onChange={handleForm}
            name="name"
            type="text"
            placeholder="Name"
            className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <input
            onChange={handleForm}
            name="email"
            type="text"
            placeholder="Email"
            className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <input
            onChange={handleForm}
            name="password"
            type="password"
            placeholder="Password"
            className="flex-1 text-gray-700 bg-primary-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-primary-400 hover:bg-primary-600 outline-none py-2 px-4 text-white font-semibold rounded-md"
          >
            Create your account
          </button>
        </form>
        <Link href="/" className="text-white">Back to Home page</Link>
        <Link href="/login" className="text-white">Login</Link>
      </div>
    </div>
  )
}