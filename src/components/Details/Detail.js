/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Mainnav from "../Navbar/main-navbar/Mainnav"
import Category from "../Navbar/navbar-category/Category"
import Topbar from "../Topbar_Start/Topbar"
import DetailBannner from "./DetailBannner"
import DetailCard from "./DetailCard"

export default function Detail() {
  return (
    <div>
      <Topbar />
      <div className="row mx-100 px-3">
        <Category />
        <Mainnav />
      </div>
      <DetailBannner />
      <DetailCard />
    </div>
  )
}
