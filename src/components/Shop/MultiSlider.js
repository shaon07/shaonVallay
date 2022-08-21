import React from 'react';
import './multi.css';

export default function MultiSlider({ priceRange, setPriceRange, setMaxPriceRange, maxPriceRange }) {
  return (
    <div>
      <div className="selector">
        <div className="price-slider">
          <input id="min-price"
            data-currency="€"
            className="slider-price border-none"
            value={priceRange}
            placeholder="min"
            onChange={(e)=>setPriceRange(e.target.value)}
          /> <span className="seperator">-</span>

          <input id="max-price" 
          data-currency="€" 
          data-max="3500" 
          className="slider-price border-none" 
          placeholder="max"
          value={maxPriceRange}
          onChange={(e)=>setMaxPriceRange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
