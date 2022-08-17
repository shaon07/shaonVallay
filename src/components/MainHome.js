import React from 'react'
import Brand from "./Brands/Brand"
import CategoryCard from "./categoryCard/CategoryCard"
import FeaturedBox from "./Featured_box/FeaturedBox"
import Navbar from "./Navbar/Navbar"
import ProductCard from "./productCard/ProductCard"
import Topbar from "./Topbar_Start/Topbar"

const MainHome = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <FeaturedBox />
      <CategoryCard />
      <ProductCard />
      <Brand />
    </div>
  )
}

export default MainHome