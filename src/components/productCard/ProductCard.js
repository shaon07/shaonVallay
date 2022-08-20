/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ProductCardBox from "./ProductCardBox";

export default function ProductCard() {
  const product_data = useSelector(state => state.getProductReducer);
  const [totalShow, setTotalShow] = useState(12);

  const handleProductShow = () => {
    setTotalShow(totalShow + 12)
  }



  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {
          product_data?.state?.data.slice(0, totalShow).map((item, ind) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={ind}>
                <ProductCardBox item={item} ind={ind} />
              </div>
            )
          })
        }
      </div>
      <div className="row justify-content-center">
        <div className="buttonSec text-center">
          {
            product_data?.state?.data.length < totalShow ? "" : <button onClick={handleProductShow} className="btn btn-primary rounded text-white">Load More</button>
          }

        </div>
      </div>

    </div>
  )
}
