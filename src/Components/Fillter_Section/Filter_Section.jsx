import React, {useState} from 'react'
import './Filter_Section.css';
import Card from "../Card/Card";
import Cardhome from "../Cardhomefilter/Cardhome"
// import '../Card/Card.css'
import Data from "../../Productdata.json"



const Filter_Section = () => {
  const [filters, setFilters] = useState({ productType: "", color: "", age: "", sortBy: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  //filter product type
  const filteredProducts = Data.products.filter((product) => {
    if (filters.productType && filters.productType !== "all") {
      return product.productType.toLowerCase() === filters.productType.toLowerCase();
    }
    return true;
  })
  // filtering color
  .filter((product) => {
    if(filters.color) {
    return product.color.toLowerCase() === filters.color.toLowerCase();
  }
  return true;
  })
    // filter by age
    .filter((product) => {
      if (filters.age) {
        return product.level_range === filters.age;
      }
      return true;
    })
  // sort price
    .sort((a, b) => {
      if (filters.sortBy === "price-asc") return a.new_price - b.new_price;
      if (filters.sortBy === "price-desc") return b.new_price - a.new_price;
      return 0;
  })

  return (
  <div>
    <div className="filter-bar">
        <div className="filtertype">
      <select name='productType' onChange={handleFilterChange} >
        <option value="">Product type</option>
        <option value="all">All</option>
        <option value="toys">Toys</option>
        <option value="bottle">Bottles</option>
        <option value="bag">Bags</option>
      </select>

      <select name='color' onChange={handleFilterChange}>
        <option value="">Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <select name='age' onChange={handleFilterChange}>
        <option value="">Age</option>
        <option value="0-3">0-3 years</option>
        <option value="4-7">4-7 years</option>
        <option value="8-12">8-12 years</option>
      </select>
      </div>

      
        
        <select name='sortBy' onChange={handleFilterChange}>
          <option value="new">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
    </div>
    <div className='d-flex justify-content-between gap-4 flex-wrap gaptype'>
    {filteredProducts.map((product, index) => (
    <Cardhome
      key={index} // Unique key for React
      title={product.title}
      subtitle={product.subtitle}
      oldPrice={product.old_price}
      newPrice={product.new_price}
      levelRange={product.level_range}
      imageUrl={product.image_url}
    
    />
  ))}
    </div>
    {/* <Pagination/> */}

   </div>
    
  )
}

export default Filter_Section;

