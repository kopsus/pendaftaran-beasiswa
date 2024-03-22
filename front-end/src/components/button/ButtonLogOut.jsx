// components/ButtonLogOut.js
import { Button } from "flowbite-react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation" // Menggunakan next/router bukan next/navigation

const ButtonLogOut = () => {
  const router = useRouter()

  const handleLogOut = async () => {
    Cookies.remove("token")
    await router.push("/")
  }

  return (
    <Button color={"failure"} onClick={handleLogOut}>
      Keluar
    </Button>
  )
}

export default ButtonLogOut
