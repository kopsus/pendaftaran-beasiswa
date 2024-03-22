"use client"

import { getData } from "./api-libs"
import { getToken } from "@/libs/token"

const UserLibs = async () => {
  const token = getToken()

  const user = await getData("user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return user
}

export default UserLibs
