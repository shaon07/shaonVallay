/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import MiddleNav from "./main-navbar/MiddleNav";
import Category from "./navbar-category/Category";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <Category />
          <MiddleNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar