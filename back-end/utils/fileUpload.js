// fungsi supaya bisa upload file

const multer = require("multer")

const storageFile = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tidak perlu melakukan validasi tipe file, semua file diterima
    cb(null, "public/uploads")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname

    cb(null, uniqueSuffix)
  },
})

exports.uploadOption = multer({ storage: storageFile })
