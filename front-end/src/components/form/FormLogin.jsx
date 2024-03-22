"use client"

import { postData } from "@/libs/api-libs"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import React from "react"

const FormLogin = () => {
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = {
        nim: e.target.nim.value,
        password: e.target.password.value,
      }

      const res = await postData(data, "user/login", {
        headers: {
          "Content-Type": "application/json",
        },
      })

      Cookies.set("token", res.token)

      await router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-md p-4 bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6" action="#">
        <h5 className="text-xl font-bold text-gray-900 text-center border-b-2 pb-5 dark:text-white">
          Masuk menggunakan akun kampus
        </h5>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            NIM
          </label>
          <input
            type="number"
            name="nim"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Ketik disini"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Kata sandi
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Masuk
        </button>
      </form>
    </div>
  )
}

export default FormLogin
