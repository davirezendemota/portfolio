import { useEffect, useState } from "react"
import { getCount } from "./api/user"

export default function Login() {

  const [counter, setCounter] = useState([]) 

  useEffect(() => {
    getCounter()
    .then(res => setCounter(res.count))
    // .then(res => console.log(res))
  })

  async function getCounter() {
    return await fetch('./api/user')
    .then(res => res.json())
  }


  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-primary-700 rounded-md p-8">

        <p className="text-2xl text-white">Login</p>

        <form className="shrink flex flex-col w-full mt-8 gap-2">
          <input
            type="login"
            placeholder="Login"
            className="flex-1 text-gray-700 bg-gray-200 rounded-md hover:bg-whgite border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 text-gray-700 bg-primary-200 rounded-md hover:bg-whgite border border-gray-200 outline-none focus:bg-white py-2 px-4"
          />
          <button
            type="button"
            className="flex-shrink-0 bg-primary-400 hover:bg-primary-600 outline-none py-2 px-4 text-white font-semibold rounded-md">
            Entrar
          </button>
          <p>{counter}</p>
        </form>
      </div>
    </div>
  )
}