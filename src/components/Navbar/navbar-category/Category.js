/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from 'react-redux'


const Category = () => {
  const sidebar_category = useSelector(state => state.getCategoryReducer);
  const [showCategory, setShowCategory] = useState(true)

  return (
    <div className="col-lg-3 d-none d-lg-block p-2">
      <a onClick={() => setShowCategory(!showCategory)} className="btn shadow-none d-flex padding_1rem align-items-center justify-content-between categoryBG text-white w-100" data-toggle="collapse" href="#navbar-vertical navbar-cl">
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
        <div className="navbar-nav w-100 overflow-hidden h-410 px-3 sliding" style={{ display: showCategory ? "block" : "none" }}>
          {
            sidebar_category?.state?.data.map((item, ind) => {
              return (
                <a href="" className="nav-item nav-link" key={ind}>{item.title}</a>
              )
            })
          }

        </div>
      </nav>
    </div>
  )
}

export default Category