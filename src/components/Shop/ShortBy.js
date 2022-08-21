/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function ShortBy({ setSearchInput, searchInput, setMaxPriceRange, setPriceRange }) {
  const [show, setShow] = useState(false);

  const [Prices, setPrice] = useState([
    [100, 200],
    [200, 400],
    [400, 600],
    [600, 800],
    [800, 1000],
    [1000, 1200]
  ])

  const hanldePrice = (item) => {
    setPriceRange(item[0]);
    setMaxPriceRange(item[1]);
    setShow(!show)
  }

  return (
    <div className="col-12 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <form action="">
          <div className="input-group">
            <input type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="form-control" placeholder="Search by name" />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
        </form>
        <div className="dropdown ml-4">
          <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
            onClick={() => setShow(!show)}
            // onBlur={() => setShow(!show)}
            aria-expanded="false">
            Sort by
          </button>
          <div className={`dropdown-menu dropdown-menu-right ${show ? "show" : "hide"}`} aria-labelledby="triggerId">
            {
              Prices.map((item, ind) => {
                return (
                  <div key={ind}>
                    <div className="dropdown-item">
                      <span onClick={()=>hanldePrice(item)}>&#2547;{item[0]} - &#2547;{item[1]}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
