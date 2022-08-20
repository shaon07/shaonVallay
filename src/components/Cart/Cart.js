import React from 'react'
import Mainnav from "../Navbar/main-navbar/Mainnav"
import Category from "../Navbar/navbar-category/Category"
import Topbar from "../Topbar_Start/Topbar"
import CartArea from "./CartArea"
import CartBanner from "./CartBanner"

export default function Cart() {
  return (
    <div>
      <Topbar />
      <div className="row mx-100 px-3">
        <Category />
        <Mainnav />
      </div>
      <CartBanner />
      <CartArea />
    </div>
  )
}
