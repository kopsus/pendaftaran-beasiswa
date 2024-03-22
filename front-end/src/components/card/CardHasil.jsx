import React from "react"
import Link from "next/link"
import { Card } from "flowbite-react"

const CardHasil = ({ dataHasil }) => {
  return (
    <div className="grid lg:grid-cols-2 p-5 gap-5 lg:p-20 lg:gap-20">
      {dataHasil.data.map((value) => {
        return (
          <Card key={value.id} className="bg-opacity-50">
            <div className="flex gap-5 overflow-x-auto">
              <div className="flex flex-col gap-3 font-normal text-white">
                <p>Nama</p>
                <p>Email</p>
                <p>No.Tlp</p>
                <p>Semester</p>
                <p>Ipk Terakhir</p>
                <p>Pilihan Beasiswa</p>
                <p>Berkas Syarat</p>
                <p>Status Ujian</p>
              </div>
              <div className="flex flex-col gap-3 font-normal text-white">
                <p>: {value.nama}</p>
                <p>: {value.email}</p>
                <p>: {value.no_tlp}</p>
                <p>: {value.semester}</p>
                <p>: {value.ipk}</p>
                <p>: {value.beasiswa}</p>
                <p>
                  :{" "}
                  <Link
                    href={`/back-end/public/uploads/${value.berkas}`}
                    target="_blank"
                    download={true}
                    className="cursor-pointer text-blue-700 font-semibold"
                  >
                    Berkas anda
                  </Link>
                </p>

                <p className="text-yellow-200 font-bold">: {value.status}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default CardHasil
