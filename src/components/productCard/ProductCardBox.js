/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { add_to_cart_product } from "../../redux/actions/GET_API_ACTION";

export default function ProductCardBox({ item, ind }) {
  const dispatch = useDispatch();
  const selected_Product = useSelector(state => state.cartReducer);
  const IDS = selected_Product.data.map(item=>item._id);
  console.log(IDS)

  const product_image_ID = item.image[0];
  const product_title = item.title;
  const product_weight = item.variation[0].attribute[0].value;
  const product_offer_price = item.variation[0].price.offer;
  const product_regualr_price = item.variation[0].price.regular;
  const product_ID = item._id;

  const hanldeCart = (data) => {
    dispatch(add_to_cart_product(item))
  }
  return (

    <div className="card product-item border-0 mb-4" key={ind}>
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${product_image_ID}?&quality=100&format=webp&fit=contain&bg=fff`} alt={item.title} />
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{product_title} - {product_weight}</h6>
        <div className="d-flex justify-content-center">
          <h6>&#2547; {`${product_offer_price === null ? product_regualr_price : product_offer_price}`}</h6><h6 className="text-muted ml-2"><del>{product_offer_price === null ? "" : `${product_regualr_price}`}</del></h6>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light border">
        <Link to={`/detail/${product_ID}`}>
          <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
        </Link>

        {
         IDS.includes(product_ID) ===false? <a onClick={() => hanldeCart(product_ID)} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a> : <Link to="/cart">Goto Cart</Link>
         
        }

      </div>
    </div>
  )
}
