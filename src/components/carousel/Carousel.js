/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";


export default function Carousel() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://server.buniyadi.craftedsys.com/api/product")
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          console.log(res.status)
        }
      })
      .then(res => setProduct(res))
      .then(err => console.log(err))
  },[])

  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>

      {
        products?.data?.slice(0, 30).map((item, ind) => {
          const product_image_ID = item?.image[0];
          return (
            <div key={ind}>
              <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active h-410">
                    <img style={{ objectFit: "contain" }} className="img-fluid" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product_image_ID}?&format=webp&fit=contain&bg=fff`} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3 mh-700">
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{item.title}</h3>
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

              </div>
            </div>
          )
        })
      }



    </Slider>
  )
}

