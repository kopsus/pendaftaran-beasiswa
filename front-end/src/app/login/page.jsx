import FormLogin from "@/components/form/FormLogin"
import React, { Fragment } from "react"

const page = () => {
  return (
    <Fragment>
      <div className="min-h-screen w-full flex justify-center items-center px-5 md:px-0">
        <FormLogin />
      </div>
    </Fragment>
  )
}

export default page
