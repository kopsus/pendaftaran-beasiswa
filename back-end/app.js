const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const cookieParse = require("cookie-parser")
dotenv.config()

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(cookieParse())

// router
const routerHasil = require("./routes/hasil")
const routerUser = require("./routes/user")
app.use("/api/v1/hasil", routerHasil)
app.use("/api/v1/user", routerUser)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`server berjalan di port ${port}`)
})
