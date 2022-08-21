import React, { useEffect, useState } from 'react';

export default function Brand() {

  const [brandName, setBrandName] = useState([]);

  useEffect(() => {
    fetch("https://server.buniyadi.craftedsys.com/api/brand?resolveCover=1&resolveImage=1&productCount=1")
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          console.log(res.status)
        }
      })
      .then(res => setBrandName(res))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5" >
        {
          brandName === undefined ? "Loading" : <>
            {
              brandName?.data?.map((item, ind) => {
                const brandLogo = item?.image[0]._id
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
