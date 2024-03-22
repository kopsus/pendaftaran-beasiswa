// mengambil model hasil
const { Hasil } = require("../models/index")

// request untuk mengambil semua data hasil dari server
exports.getAllHasil = async (req, res) => {
  try {
    const hasil = await Hasil.findAll()
    return res.status(200).json({ status: "success", data: hasil })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error,
    })
  }
}

// request untuk mengirim data hasil ke server
exports.postHasil = async (req, res) => {
  const { nama, email, no_tlp, semester, ipk, beasiswa } = req.body

  const berkas = req.file
  if (!berkas) {
    res.status(400)
    throw new Error("Tidak ada file yang diupload")
  }

  const filename = berkas.filename

  const newHasil = await Hasil.create({
    nama,
    email,
    no_tlp,
    semester,
    ipk,
    beasiswa,
    berkas: filename,
    status: "Belum di Verifikasi",
  })

  res.status(201).json({
    status: "success",
    data: newHasil,
  })
}
