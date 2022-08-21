/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

export default function CategoryCard() {
  const category_data = useSelector(state => state.getCategoryReducer);
  const [categoryList, setCategoryList] = useState([]);
  const categoryURL = `https://server.buniyadi.craftedsys.com/api/category?resolveCover=1&resolveIcon=1&recursive=1&resolveParent=1&resolveImage=1&productCount=1&childCount=1&parent`;

  useEffect(() => {
    fetch(categoryURL)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(res => setCategoryList(res))
      .catch(err => console.log(err))
  }, [categoryURL]);

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        {
          categoryList?.data?.map((item, ind) => {
            const category_img_id = item.image[0]._id;
            return (
              <div className="col-lg-4 col-md-6 pb-1" key={ind}>
                <div className="cat-item d-flex flex-column border mb-4 p-30">
                  <p className="text-right">{item.shortDescription}</p>
                  <a href="" className="cat-img position-relative text-center overflow-hidden mb-3">
                    <img className="img-fluid" src={`https://server.buniyadi.craftedsys.com/api/image/serve/${category_img_id}?&format=webp&fit=contain&bg=fff&quality=100`} alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">{item.title}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
