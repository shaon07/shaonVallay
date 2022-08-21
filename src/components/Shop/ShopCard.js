import React, { useEffect, useState } from 'react';
import ProductCardBox from "../productCard/ProductCardBox";
import FilterBy from "./FilterBy";
import ShortBy from "./ShortBy";

export default function ShopCard() {
  const [totalShow, setTotalShow] = useState(12);
  const [searchInput, setSearchInput] = useState('');
  const [filterByCategory, setFilterByCategory] = useState([]);
  const [priceRange, setPriceRange] = useState(10);
  const [maxPriceRange,setMaxPriceRange] = useState(1200)


  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch(`https://server.buniyadi.craftedsys.com/api/product?search=${searchInput}&category=${filterByCategory}&minimumPrice=${priceRange}&maximumPrice=${maxPriceRange}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          console.log(res.status)
        }
      })
      .then(res => setNewProduct(res))
      .then(err => console.log(err))
  }, [searchInput,filterByCategory,priceRange,maxPriceRange]);

console.log(priceRange, maxPriceRange)

  const filteredData = newProduct?.data;

  const handleProductShow = () => {
    setTotalShow(totalShow + 12)
  }

  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="row px-xl-5">
        <FilterBy 
        setFilterByCategory={setFilterByCategory} 
        filterByCategory={filterByCategory} 
        setPriceRange={setPriceRange}
        priceRange={priceRange}
        setMaxPriceRange={setMaxPriceRange}
        maxPriceRange={maxPriceRange}
        
        />
        <div className="col-lg-9 col-md-12">
          <div className="row pb-3">
            <ShortBy 
            searchInput={searchInput} 
            setSearchInput={setSearchInput} 
            setPriceRange={setPriceRange}
            setMaxPriceRange={setMaxPriceRange}
            />
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