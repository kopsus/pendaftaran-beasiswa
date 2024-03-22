const jwt = require("jsonwebtoken")
const { User } = require("../models/index")

// middleware untuk mengecek apakah di cookie ada token dan token tsb apakah sesuai dengan token yg dikirim server kpd user
exports.authMiddleware = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]
  }
  // token = req.cookies.jwt

  if (!token) {
    return next(
      res.status(401).json({
        status: 401,
        message: "Token is not defined",
      })
    )
  }

  // decode token
  let decode
  try {
    decode = await jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return next(
      res.status(401).json({
        error: err,
        message: "Token yang di masukan tidak di temukan",
      })
    )
  }

  const currentUser = await User.findByPk(decode.id)
  if (!currentUser) {
    return next(
      res.staus(401).json({
        status: 401,
        message: "User sudah terhapus",
      })
    )
  }

  req.user = currentUser

  next()
}
