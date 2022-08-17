/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useSelector } from "react-redux"

export default function ProductCard() {
  const product_data = useSelector(state => state.getProductReducer);
  const [totalProductLeng, setTotalProductLeng] = useState(product_data?.state?.data.length)
  const [totalShow, setTotalShow] = useState(12);

  const handleProductShow = () => {
    setTotalShow(totalShow + 12)
  }

  console.log(product_data?.state?.data.length)


  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {
          product_data?.state?.data.slice(0, totalShow).map((item, ind) => {
            const product_image_ID = item.image[0];
            const product_title = item.title;
            const product_weight = item.variation[0].attribute[0].value;
            const product_offer_price = item.variation[0].price.offer;
            const product_regualr_price = item.variation[0].price.regular;
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={ind}>
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product_image_ID}?&quality=100&format=webp&fit=contain&bg=fff`} alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product_title} - {product_weight}</h6>
                    <div className="d-flex justify-content-center">
                      <h6>{`$${product_offer_price === null ? product_regualr_price : product_offer_price}`}</h6><h6 className="text-muted ml-2"><del>{product_offer_price === null ? "" : `$${product_regualr_price}`}</del></h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                  </div>
                </div>
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
