import React, { useState } from 'react';
import { useSelector } from "react-redux";

export default function FilterBy({ setFilterByCategory }) {
    const product_data = useSelector(state => state.getCategoryReducer);
    const [showCSS, setShowCSS] = useState(0);

    return (
        <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                <form>

                    <input type="range" value={2} class="form-range w-100" min="0" max="5" id="customRange2" />
                </form>
            </div>

            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by Category</h5>
                <form>

                    {
                        product_data?.state?.data.map((item, ind) => {
                            const title = item.title.toLowerCase().replaceAll(" ", "-");
                            const displayOrder = item.displayOrder;

                            return (
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={ind}>

                                    <span
                                        className={`text-capitalize cursor_pointer ${showCSS === displayOrder ? "selected_filter" : ""}`}
                                        onClick={() => {
                                            setFilterByCategory([title]);
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
