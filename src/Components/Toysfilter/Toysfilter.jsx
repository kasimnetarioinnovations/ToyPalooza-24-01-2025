import React, {useState} from 'react'
import ToysCard from "../Toysfilter/ToysCard";
// import '../Card/Card.css'
import '../../Components/Toysfilter/Toysfilter.css'
import Producttoysdata from "../../Producttoysdata.json"


const Toysfilter = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    age: "",
    gender: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = Producttoysdata.products
    .filter((product) => {
      if (filters.category && filters.category !== "all") {
        return product.category.toLowerCase() === filters.category.toLowerCase();
      }
      return true;
    })
    .filter((product) => {
      if (filters.price) {
        return parseInt(product.new_price, 10) <= parseInt(filters.price, 10);
      }
      return true;
    })
    .filter((product) => {
      if (filters.age) {
        return product.level_range === filters.age;
      }
      return true;
    })
    .filter((product) => {
      if (filters.gender && filters.gender !== "all") {
        return product.gender?.toLowerCase() === filters.gender.toLowerCase();
      }
      return true;
    });
  // const [filters, setFilters] = useState({ category: "", price:"",   age: "", gender: "" });

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters({ ...filters, [name]: value });
  // };

  // //filter category
  // const filteredProducts = Data.products.filter((product) => {
  //   if (filters.category && filters.category !== "all") {
  //     return product.category.toLowerCase() === filters.category.toLowerCase();
  //   }
  //   return true;
  // })
  // // filtering color
  // .filter((product) => {
  //   if(filters.color) {
  //   return product.color.toLowerCase() === filters.color.toLowerCase();
  // }
  // return true;
  // })
  //   // filter by age
  //   .filter((product) => {
  //     if (filters.age) {
  //       return product.level_range === filters.age;
  //     }
  //     return true;
  //   })
  // // sort price
  //   .sort((a, b) => {
  //     if (filters.sortBy === "price-asc") return a.new_price - b.new_price;
  //     if (filters.sortBy === "price-desc") return b.new_price - a.new_price;
  //     return 0;
  // })

  return (
  <div>
    <div className="filter-bar toys-filter-bar justify-content-start">
     <select name="category" onChange={handleFilterChange}>
          <option value="all">Category</option>
          <option value="Car">Car</option>
          <option value="Game">Game</option>
          <option value="Book">Book</option>
        </select>

        <select name="price" onChange={handleFilterChange}>
          <option value="">Max Price</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="700">700</option>
        </select>

        <select name="age" onChange={handleFilterChange}>
          <option value="">Age</option>
          <option value="0-3">0-3 years</option>
          <option value="4-7">4-7 years</option>
          <option value="8-12">8-12 years</option>
        </select>

        <select name="gender" onChange={handleFilterChange}>
          <option value="all">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        </div>
    {/* <div className="filter-bar justify-content-start">
        <div className="filtertype">
      <select name='productType' onChange={handleFilterChange}
      
      >
        <option value="">Category</option>
        <option value="all">All</option>
        <option value="car">Car</option>
        <option value="game">Game</option>
        <option value="book">Book</option>
      </select>

      <select name='color' onChange={handleFilterChange}>
        <option value="">Price</option>
        <option value="red">200</option>
        <option value="blue">500</option>
        <option value="green">700</option>
      </select>

      <select name='age' onChange={handleFilterChange}>
        <option value="">Age</option>
        <option value="0-3">0-3 years</option>
        <option value="4-7">4-7 years</option>
        <option value="8-12">8-12 years</option>
      </select>
      </div>

      <div className="sort-by">
        <select name='sortBy' onChange={handleFilterChange}>
          <option value="new">Gender</option>
          <option value="price-asc">Male</option>
          <option value="price-desc">Female</option>
        </select>
      </div>
    </div> */}
      <div className="d-flex justify-content-between gap-5 flex-wrap py-5 toysmapcard">
        {filteredProducts.map((product, index) => (
          <ToysCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            oldPrice={product.old_price}
            newPrice={product.new_price}
            levelRange={product.level_range}
            imageUrl={product.image_url}
          />
        ))}
      </div>
    {/* <div className='d-flex justify-content-between gap-5 flex-wrap py-5'>
    {Producttoysdata.products.map((product, index) => (
    <ToysCard
      key={index} // Unique key for React
      title={product.title}
      subtitle={product.subtitle}
      oldPrice={product.old_price}
      newPrice={product.new_price}
      levelRange={product.level_range}
      imageUrl={product.image_url}
    />
  ))}
    </div> */}
       
   </div>
    
  )
}

export default Toysfilter;

