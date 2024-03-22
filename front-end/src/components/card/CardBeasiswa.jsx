import { Card } from "flowbite-react"
import Image from "next/image"

// assets
import akademik from "@/../public/assets/akademik.png"
import non_akademik from "@/../public/assets/non_akademik.png"

const CardBeasiswa = () => {
  return (
    <div className="grid lg:grid-cols-2 p-5 gap-5 lg:p-20 lg:gap-20">
      <Card className="bg-white bg-opacity-50">
        <Image
          src={akademik}
          alt="akademik"
          width={0}
          height={0}
          className="h-60 w-auto object-cover rounded-md"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Beasiswa Akademik
        </h5>
        <div className="flex flex-col gap-2">
          <p className="font-normal">Syarat dan ketentuan :</p>
          <ol className="list-decimal pl-5 text-gray-700">
            <li>Mahasiswa aktif Ittp</li>
            <li>Tidak sedang menerima beasiswa dari pihak lain.</li>
            <li>IPK minimal 3.00.</li>
            <li>Tidak pernah melakukan pelanggaran disiplin akademik.</li>
            <li>Berkelakuan baik dan aktif dalam kegiatan kemahasiswaan</li>
          </ol>
        </div>
      </Card>
      <Card className="bg-white bg-opacity-50">
        <Image
          src={non_akademik}
          alt="akademik"
          width={0}
          height={0}
          className="h-60 w-auto object-cover rounded-md"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Beasiswa non Akademik
        </h5>
        <div className="flex flex-col gap-2">
          <p className="font-normal">Syarat dan ketentuan :</p>
          <ol className="list-decimal pl-5 text-gray-700">
            <li>Mahasiswa aktif Ittp</li>
            <li>Tidak sedang menerima beasiswa dari pihak lain.</li>
            <li>IPK minimal 3.00.</li>
            <li>Tidak pernah melakukan pelanggaran disiplin akademik.</li>
            <li>Berkelakuan baik dan aktif dalam kegiatan kemahasiswaan</li>
          </ol>
        </div>
      </Card>
    </div>
  )
}

export default CardBeasiswa
