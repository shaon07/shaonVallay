import React, { useEffect, useState } from 'react';
import MultiSlider from "./MultiSlider";

export default function FilterBy({ setFilterByCategory, filterByCategory, setPriceRange, priceRange, setMaxPriceRange, maxPriceRange }) {
    const [showCSS, setShowCSS] = useState(0);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch(`https://server.buniyadi.craftedsys.com/api/category`)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    console.log(res.status)
                }
            })
            .then(res => setCategoryList(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                <span>Set Price : {priceRange} Taka</span>
                <form>
                    <MultiSlider priceRange={priceRange} setPriceRange={setPriceRange} setMaxPriceRange={setMaxPriceRange} maxPriceRange={maxPriceRange}/>
                    <input type="range"
                        value={priceRange}
                        className="form-range w-100"
                        min="10"
                        max="1100"
                        id="customRange2"
                        onChange={(e) => setPriceRange(e.target.value)}
                    />
                </form>
            </div>

            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by Category
                    {
                        filterByCategory.length === 0 ? "" : <span onClick={() => {
                            setFilterByCategory('');
                            setShowCSS(0)
                        }} className="reset-btn">Reset</span>
                    }

                </h5>
                <form>

                    {
                        categoryList?.data?.map((item, ind) => {
                            const title = item.title.toLowerCase().replaceAll(" ", "-");
                            const displayOrder = item.displayOrder;
                            return (
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={ind}>

                                    <span
                                        className={`text-capitalize cursor_pointer ${showCSS === displayOrder ? "selected_filter" : ""}`}
                                        onClick={() => {
                                            setFilterByCategory(item._id);
                                            setShowCSS(displayOrder)
                                        }}>{title.replaceAll("-", " ")}</span>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        </div>
    )
}
