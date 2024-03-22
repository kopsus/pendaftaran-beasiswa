"use client"

import FormDaftarBeasiswa from "@/components/form/FormDaftarBeasiswa"
import UserLibs from "@/libs/user-libs"
import React, { Fragment, useEffect, useState } from "react"

const Page = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await UserLibs()
        setUserData(user)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <Fragment>
      <div className="min-h-screen w-full flex justify-center items-center py-10 px-5 md:px-0">
        {/* Pastikan untuk menunggu userData tersedia sebelum menggunakan data */}
        {userData && <FormDaftarBeasiswa dataUser={userData} />}
      </div>
    </Fragment>
  )
}

export default Page
