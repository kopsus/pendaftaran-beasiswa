const express = require("express")
const router = express.Router()
const {
  postUser,
  getAllUsers,
  loginUser,
  logOutUser,
  getMyUser,
} = require("../controller/userController")
const { authMiddleware } = require("../middleware/authMiddleware")

// route untuk pemanggilan url untuk data user
router.post("/register", postUser)
router.post("/login", loginUser)
router.get("/", getAllUsers)
router.post("/logout", authMiddleware, logOutUser)
router.get("/me", authMiddleware, getMyUser)

module.exports = router
