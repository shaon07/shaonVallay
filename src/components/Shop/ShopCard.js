import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ProductCardBox from "../productCard/ProductCardBox";
import FilterBy from "./FilterBy";
import ShortBy from "./ShortBy";

export default function ShopCard() {
  const product_data = useSelector(state => state.getProductReducer);
  const [totalShow, setTotalShow] = useState(12);
  const [searchInput, setSearchInput] = useState('');
  const [filterByCategory, setFilterByCategory] = useState([]);


  // will start work without redux from tomorrow

  // const [newProduct, setNewProduct] = useState([]);

  // useEffect(() => {
  //   fetch(`https://server.buniyadi.craftedsys.com/api/product`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         return res.json()
  //       }
  //     })
  //     .then(res => setNewProduct(res))
  //     .then(err => console.log(err))
  // }, []);

  // console.log(newProduct)


  const filteredData = product_data?.state?.data.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).filter(item => item.url.includes(filterByCategory.map((item) => item)));

  const handleProductShow = () => {
    setTotalShow(totalShow + 12)
  }



  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="row px-xl-5">
        <FilterBy setFilterByCategory={setFilterByCategory} />
        <div className="col-lg-9 col-md-12">
          <div className="row pb-3">
            <ShortBy searchInput={searchInput} setSearchInput={setSearchInput} />
            {
              filteredData?.length === 0 ? <h1 className="m-auto">
                <img src="https://blog.hubspot.com/hs-fs/hubfs/404-error-page-iconfinder.jpg?width=650&name=404-error-page-iconfinder.jpg" alt="np" className="img-fluid" />
              </h1> : filteredData?.slice(0, totalShow).map((item, ind) => {

                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={ind} >
                    <ProductCardBox item={item} ind={ind} />
                  </div>
                )
              })
            }
          </div>
          <div className="row justify-content-center">
            {
              filteredData?.length === 0 ? "" : <div className="buttonSec text-center">
                {
                  filteredData?.length < totalShow ? "" : <button onClick={handleProductShow} className="btn btn-primary rounded text-white">Load More</button>
                }

              </div>
            }

          </div>
        </div>

      </div>
    </div>
  )
}
//