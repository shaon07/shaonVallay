/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';


const Category = () => {
  const [showCategory, setShowCategory] = useState(true);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://server.buniyadi.craftedsys.com/api/category')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          console.log(res.status)
        }
      })
      .then(res => setCategory(res))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="col-lg-3 d-none d-lg-block p-2">
      <a onClick={() => setShowCategory(!showCategory)} className="btn shadow-none d-flex padding_1rem align-items-center justify-content-between categoryBG text-white w-100" data-toggle="collapse" href="#navbar-vertical navbar-cl">
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
        <div className="navbar-nav w-100 overflow-hidden h-410 px-3 sliding" style={{ display: showCategory ? "block" : "none" }}>
          {
            category?.data?.map((item, ind) => {
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