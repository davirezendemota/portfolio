import { useState } from "react"

import { Private } from "../contexts/auth"

export default function SignUp() {

  const [user, setUser] = useState([])

  async function createUser() {

    await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => console.log(json))

  }

  function handleSubmit(event) {

    setUser((fields) => ({
      ...fields,
      [event.target.name]: [event.target.value]
    }))

  }

  return (
      <div className="flex h-screen justify-center items-center">
        <div className="bg-primary-700 rounded-md p-8">

          <p className="text-2xl text-white">Create your account</p>

          <form className="shrink flex flex-col w-full mt-8 gap-2">
            <input
              onChange={handleSubmit}
              name="name"
              type="text"
              placeholder="Name"
              className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
            />
            <input
              onChange={handleSubmit}
              name="email"
              type="text"
              placeholder="Email"
              className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
            />
            {/* <input
            onChange={handleSubmit}
            name="password"
            type="password"
            placeholder="Password"
            className="flex-1 text-gray-700 bg-primary-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
          /> */}
            <button
              type="button"
              className="flex-shrink-0 bg-primary-400 hover:bg-primary-600 outline-none py-2 px-4 text-white font-semibold rounded-md"
              onClick={createUser}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
  )
}