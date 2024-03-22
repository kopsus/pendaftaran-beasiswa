"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react"

import Image from "next/image"

// assets
import Logo from "@/../public/assets/logo.png"
import RenderingButton from "./button/RenderingButton"

const NavbarComponent = () => {
  return (
    <Navbar className="sticky top-0 px-5 md:px-20 bg-opacity-50 border-b">
      <NavbarBrand href="/">
        <Image
          src={Logo}
          width={0}
          height={0}
          className="mr-3 h-10 w-auto"
          alt="Logo"
        />
      </NavbarBrand>
      <div className="flex gap-2 md:order-2">
        <RenderingButton />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <div className="flex flex-col md:flex-row md:gap-20">
          <NavbarLink
            href="/"
            className="font-semibold hover:scale-105 transition-all text-base"
          >
            Beasiswa
          </NavbarLink>
          <NavbarLink
            href="daftar"
            className="font-semibold hover:scale-105 transition-all text-base"
          >
            Daftar
          </NavbarLink>
          <NavbarLink
            href="hasil"
            className="font-semibold hover:scale-105 transition-all text-base"
          >
            Hasil
          </NavbarLink>
          <NavbarLink
            href="grafik"
            className="font-semibold hover:scale-105 transition-all text-base"
          >
            Grafik
          </NavbarLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavbarComponent
