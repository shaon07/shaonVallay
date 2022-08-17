import React from 'react'
import { useSelector } from "react-redux"

export default function Brand() {
  const brand_data = useSelector(state => state.getBrandReducer);
  const brandList = brand_data?.data?.data;
  console.log(brandList)
  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5" >
        {
          brandList === undefined ? "Loading" : <>
            {
              brandList.map((item, ind) => {
                const brandLogo = item?.image[0]
                return (

                  <div className="col-12" key={ind}>
                    <div className="owl-carousel vendor-carousel">
                      <div className="vendor-item border p-4">
                        <img className="img-fluid transform-07" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${brandLogo}?&quality=100&format=webp&fit=contain&bg=fff`} alt="brands" />
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </>
        }
      </div>
    </div >
  )
}
