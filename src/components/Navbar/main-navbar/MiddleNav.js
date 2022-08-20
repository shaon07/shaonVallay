/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Carousel from "../../carousel/Carousel"
import Mainnav from "./Mainnav";

const MiddleNav = () => {
  return (

    <div className="col-lg-9">
      <Mainnav />

      {/* carousel */}
      <Carousel />
    </div>




  )
}

export default MiddleNav