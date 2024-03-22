"use client"

import { Button } from "flowbite-react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import Link from "next/link"

const ButtonLogOut = () => {
  const router = useRouter()

  const handleLogOut = async () => {
    Cookies.remove("token")
    await router.push("/")
  }

  return (
    <Button color={"blue"} onClick={handleLogOut}>
      Keluar
    </Button>
  )
}

const ButtonLogIn = () => (
  <Link href="/login" passHref>
    <Button color={"blue"}>Masuk</Button>
  </Link>
)

const ButtonSignIn = () => {
  // Periksa apakah token tersedia dalam cookie
  const isLoggedIn = !!Cookies.get("token")

  return <>{isLoggedIn ? <ButtonLogOut /> : <ButtonLogIn />}</>
}

export default ButtonSignIn
