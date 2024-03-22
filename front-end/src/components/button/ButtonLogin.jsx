// components/ButtonLogIn.js
import { Button } from "flowbite-react"
import Link from "next/link"

const ButtonLogIn = () => (
  <Link href="/login" passHref>
    <Button color={"blue"}>Masuk</Button>
  </Link>
)

export default ButtonLogIn
