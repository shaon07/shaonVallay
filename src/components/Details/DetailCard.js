/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Slider from "react-slick";

export default function DetailCard() {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch(`https://server.buniyadi.craftedsys.com/api/product/${id}?resolveCategory=1&resolvePrimaryCategory=1&resolveBrand=1&resolveTag=1&resolveCover=1&resolveImage=1`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          console.log(res.status)
        }
      })
      .then(res => setSingleProduct([res]))
      .catch(err => console.log(err));
  }, [id])


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container-fluid py-5">
      {
        singleProduct?.map((item, ind) => {
          const selected_product_title = item.title;
          const selected_product_shortDescription = item.shortDescription;
          const selected_product_Description = item.description;
          const selected_product_image = item.image;
          const selected_prodcut_regular_price = item?.variation[0].price.regular;
          const selected_prodcut_regular_offer = item?.variation[0].price.offer;
          const selected_prodcut_size = item?.variation[0].attribute;
          const selected_product_available = item?.variation[0].stock.available;
          const selected_unit = item?.unit;


          return (
            <div key={ind}>
              <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">

                  <Slider {...settings}>
                    <div>
                      <img className="m-auto" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${selected_product_image[0]._id}?width=400&height=400&quality=75&format=webp&fit=contain&bg=fff`} alt={`${selected_product_title} image`} />
                    </div>

                  </Slider>
                </div>

                <div className="col-lg-7 pb-5">
                  <h3 className="font-weight-semi-bold">{selected_product_title}</h3>
                  <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star-half-alt"></small>
                      <small className="far fa-star"></small>
                    </div>
                    <small className="pt-1">({selected_product_available} available {selected_unit.toUpperCase()})</small>
                  </div>
                  <h3 className="font-weight-semi-bold mb-4">BDT - {selected_prodcut_regular_offer === null ? selected_prodcut_regular_price : selected_prodcut_regular_offer}TK
                    <h5 className="text-muted mt-2">
                      <del>	&#2547;{selected_prodcut_regular_offer === null ? "" : selected_prodcut_regular_price}</del>
                    </h5>
                  </h3>
                  <p className="mb-4">{selected_product_shortDescription}</p>
                  <div className="d-flex mb-3">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                    <form>
                      {
                        selected_prodcut_size?.map((item, ind) => {
                          return (
                            <div className="custom-control custom-radio custom-control-inline" key={ind}>
                              <input type="radio" className="custom-control-input" id="size-1" name="size" />
                              <label className="custom-control-label" htmlFor="size-1">{item.value}</label>
                            </div>
                          )
                        })
                      }
                    </form>
                  </div>
                  <div className="d-flex mb-4">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                    <form>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                        <label className="custom-control-label" htmlFor="color-1">Black</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                        <label className="custom-control-label" htmlFor="color-2">White</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                        <label className="custom-control-label" htmlFor="color-3">Red</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                        <label className="custom-control-label" htmlFor="color-4">Blue</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                        <label className="custom-control-label" htmlFor="color-5">Green</label>
                      </div>
                    </form>
                  </div>
                  <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3 w-130">
                      <div className="input-group-btn">
                        <button className="btn btn-primary btn-minus" >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input type="text" className="form-control bg-secondary text-center" value="1" />
                      <div className="input-group-btn">
                        <button className="btn btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                  </div>
                  <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                    <div className="d-inline-flex">
                      <a className="text-dark px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="text-dark px-2" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="text-dark px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="text-dark px-2" href="">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-xl-5">
                <div className="col">
                  <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                      <h4 className="mb-3">Product Description</h4>
                      <p>{`${selected_product_Description}`}</p>
                    </div>

                    <div className="tab-pane fade" id="tab-pane-3">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="mb-4">1 review htmlFor "Colorful Stylish Shirt"</h4>
                          <div className="media mb-4">
                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1 w-45" />
                            <div className="media-body">
                              <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                              <div className="text-primary mb-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                              </div>
                              <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Leave a review</h4>
                          <small>Your email address will not be published. Required fields are marked *</small>
                          <div className="d-flex my-3">
                            <p className="mb-0 mr-2">Your Rating * :</p>
                            <div className="text-primary">
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <form>
                            <div className="form-group">
                              <label htmlFor="message">Your Review *</label>
                              <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Your Name *</label>
                              <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Your Email *</label>
                              <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group mb-0">
                              <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
