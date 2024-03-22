const { User } = require("../models/index")
const jwt = require("jsonwebtoken")

// membuat jwt berdasarkan id user
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

// mengirimkan token jwt ke cookie
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id)

  const cookieOption = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRE_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  }

  res.cookie("jwt", token, cookieOption)

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  })
}

// request untuk membuat data user
exports.postUser = async (req, res) => {
  const { nim, ipk, password, confirmPassword } = req.body

  try {
    const newUser = await User.create({
      nim,
      ipk,
      password,
      confirmPassword,
    })

    if (password != confirmPassword) {
      return res.status(400).json({
        message: "Password dan Password Confirm tidak sama",
      })
    }

    createSendToken(newUser, 201, res)
  } catch (error) {
    return res.status(400).json({
      status: "Fail",
      error,
    })
  }
}

// request untuk mengambil semua data user
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    return res.status(200).json({ status: "success", data: user })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error,
    })
  }
}

// request untuk login dari data user yang sudah di buat
exports.loginUser = async (req, res) => {
  const { nim, password } = req.body
  try {
    const userData = await User.findOne({ where: { nim: nim } })

    if (
      !userData ||
      !(await userData.CorrectPassword(password, userData.password))
    ) {
      return res.status(400).json({
        status: "Failed",
        message: "Eroor Login",
        error: "Invalid Nim and Password",
      })
    }

    createSendToken(userData, 200, res)
  } catch (error) {
    return res.status(500).json({ status: "failed", message: "Server Error" })
  }
}

// request untuk log out
exports.logOutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  })

  res.status(200).json({ message: "Berhasil Log Out" })
}

// request untuk mengambil data logged user
exports.getMyUser = async (req, res) => {
  const currentUser = await User.findByPk(req.user.id)

  if (currentUser) {
    return res.status(200).json({
      nim: currentUser.id,
      ipk: currentUser.ipk,
    })
  }

  return res.status(404).json({ message: "Token tidak ditemukan" })
}
