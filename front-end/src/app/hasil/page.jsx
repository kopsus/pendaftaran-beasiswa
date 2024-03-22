import CardHasil from "@/components/card/CardHasil"
import React, { Fragment } from "react"
import axios from "axios"

const page = async () => {
  // get data
  const res = await axios.get("http://localhost:5000/api/v1/hasil")
  const dataHasil = res.data

  return (
    <Fragment>
      <CardHasil dataHasil={dataHasil} />
    </Fragment>
  )
}

export default page
