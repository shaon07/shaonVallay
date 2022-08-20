import React from 'react';
import Mainnav from "../Navbar/main-navbar/Mainnav";
import Category from "../Navbar/navbar-category/Category";
import Topbar from "../Topbar_Start/Topbar";
import ShopBanner from "./ShopBanner";
import ShopCard from "./ShopCard";

export default function Shop() {
  return (
    <div>
      <Topbar />
      <div className="row mx-100 px-3">
        <Category />
        <Mainnav />
      </div>
      <ShopBanner />
      <ShopCard />
    </div>
  )
}
