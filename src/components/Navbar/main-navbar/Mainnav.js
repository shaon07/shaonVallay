/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Mainnav() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">

        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav mr-auto py-0">
            <Link to="/">
              <a className="nav-item nav-link active">Home</a>
            </Link>

            <Link to={`/shop`}>
              <a className="nav-item nav-link">Shop</a>
            </Link>
            <div className={`nav-item dropdown ${show ? "show" : ""}`} 
            onClick={() => setShow(!show)} >
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className={`dropdown-menu rounded-0 m-0 ${show ? "show" : ""}`}>
                <Link to="/cart">
                  <a href="cart.html" className="dropdown-item">Shopping Cart</a>

                </Link>
                <a href="checkout.html" className="dropdown-item">Checkout</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <div className="navbar-nav ml-auto py-0">
            <a href="" className="nav-item nav-link">Login</a>
            <a href="" className="nav-item nav-link">Register</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
