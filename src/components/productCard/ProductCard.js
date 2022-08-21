/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ProductCardBox from "./ProductCardBox";

export default function ProductCard() {
  const [products,setProducts] = useState([]);
  const [totalShow, setTotalShow] = useState(12);

  const handleProductShow = () => {
    setTotalShow(totalShow + 12)
  }

  useEffect(()=>{
    fetch("https://server.buniyadi.craftedsys.com/api/product")
    .then(res=>{
      if(res.status===200){
        return res.json()
      }
    })
    .then(res=>setProducts(res))
    .catch(err=>console.log(err))
  },[])



  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {
          products?.data?.slice(0, totalShow).map((item, ind) => {
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
            products?.data?.length < totalShow ? "" : <button onClick={handleProductShow} className="btn btn-primary rounded text-white">Load More</button>
          }

        </div>
      </div>

    </div>
  )
}
