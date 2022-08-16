/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const MiddleNav = () => {
  return (

    <div className="col-lg-9">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        <a href="" className="text-decoration-none d-block d-lg-none">
          <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">SHAON</span>Vallay</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav mr-auto py-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="shop.html" className="nav-item nav-link">Shop</a>
            <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="cart.html" className="dropdown-item">Shopping Cart</a>
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

      {/* carousel */}
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active h-410">
            <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 mh-700">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="carousel-item h-410">
            <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 mh-700">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
          <div className="btn btn-dark navbar-btn">
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
          <div className="btn btn-dark navbar-btn">
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </div>
    </div>

  )
}

export default MiddleNav