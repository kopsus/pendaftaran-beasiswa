const express = require("express")
const router = express.Router()
const { postHasil, getAllHasil } = require("../controller/hasilController")
const { uploadOption } = require("../utils/fileUpload")
const { authMiddleware } = require("../middleware/authMiddleware")

// route untuk pemanggilan url untuk data hasil
router.post("/", uploadOption.single("berkas"), postHasil)
router.get("/", getAllHasil)

module.exports = router
