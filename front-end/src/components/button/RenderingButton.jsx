"use client"

// components/ButtonSignIn.js
import { useState, useEffect } from "react"
import { Button } from "flowbite-react"
import ButtonLogOut from "./ButtonLogOut"
import ButtonLogIn from "./ButtonLogIn"
import Cookies from "js-cookie"

const ButtonSignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = Cookies.get("token")
    setIsLoggedIn(!!token)
  }, [])

  return <>{isLoggedIn ? <ButtonLogOut /> : <ButtonLogIn />}</>
}

export default ButtonSignIn
