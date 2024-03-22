"use client"
import axios from "axios"
import { postHasil } from "@/libs/api-libs"
import { Button, FileInput, Label, Select } from "flowbite-react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

const FormDaftarBeasiswa = ({ dataUser }) => {
  const router = useRouter()
  const token = Cookies.get("token")

  const handleDaftar = async (e) => {
    e.preventDefault()

    try {
      const data = {
        nama: e.target.nama.value,
        email: e.target.email.value,
        no_tlp: e.target.no_tlp.value,
        semester: e.target.semester.value,
        ipk: parseFloat(e.target.ipk.value),
        beasiswa: e.target.beasiswa.value,
        berkas: e.target.berkas.files[0],
      }

      const res = await axios.post("http://localhost:5000/api/v1/hasil", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      router.push("/hasil")
    } catch (error) {
      console.error("Error saat mengirim data:", error)
    }
  }

  const isDisabled = dataUser?.ipk <= 3.0 || token == null

  return (
    <div className="max-w-md w-full p-4 bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        onSubmit={handleDaftar}
        encType="multipart/form-data"
        className="space-y-3"
      >
        <h5 className="text-xl font-bold text-gray-900 text-center border-b-2 pb-5 dark:text-white">
          DAFTAR BEASISWA
        </h5>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Nama
          </label>
          <input
            type="text"
            name="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Ketik disini"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nama@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            No.Tlp
          </label>
          <input
            type="number"
            name="no_tlp"
            id="no_tlp"
            placeholder="08xxxxxx"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label value="Semester saat ini" />
          </div>
          <Select
            className="cursor-pointer"
            id="semester"
            required
            name="semester"
          >
            <option value={"Satu"}>1</option>
            <option value={"Dua"}>2</option>
            <option value={"Tiga"}>3</option>
            <option value={"Empat"}>4</option>
            <option value={"Lima"}>5</option>
            <option value={"Enam"}>6</option>
            <option value={"Tujuh"}>7</option>
            <option value={"Delapan"}>8</option>
          </Select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Ipk Terakhir
          </label>
          <input
            type="number"
            name="ipk"
            value={dataUser?.ipk}
            disabled
            className="bg-slate-500 border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label value="Pilihan Beasiswa" />
          </div>
          <Select
            className="cursor-pointer"
            id="beasiswa"
            required
            name="beasiswa"
            disabled={isDisabled}
          >
            <option value={"Beasiswa akademik"}>Beasiswa akademik</option>
            <option value={"Beasiswa non akademik"}>
              Beasiswa non akademik
            </option>
          </Select>
        </div>
        <div>
          <div className="mb-1 block">
            <Label value="Upload berkas syarat" />
          </div>
          <FileInput disabled={isDisabled} name="berkas" required />
        </div>
        <div className="flex items-center gap-10 pt-5">
          <Button
            disabled={isDisabled}
            type="submit"
            className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
            ${isDisabled ? "cursor-not-allowed opacity-50" : ""}
            `}
          >
            Daftar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormDaftarBeasiswa
