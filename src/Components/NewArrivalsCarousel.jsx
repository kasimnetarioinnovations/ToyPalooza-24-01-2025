import React, { useState } from "react";
import "./NewArrivalsCarousel.css";
import Card from "./Card/Card";
import "./Card/Card.css";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import Data from "../Productdata.json";

const NewArrivalsCarousel = ({arrivaltitle}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const cards = Data.products.map((product, index) => (
  
    <Card
      key={index} // Unique key for React
      title={product.title}
      subtitle={product.subtitle}
      oldPrice={product.old_price}
      newPrice={product.new_price}
      levelRange={product.level_range}
      imageUrl={product.image_url}
    />

  ))
 

  // Define the number of cards visible at a time
  const visibleCardsCount = 4;

  // Calculate the range of cards to display
  const visibleCards = cards.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );

  // Handle left arrow click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle right arrow click
  const handleNext = () => {
    if (currentIndex + visibleCardsCount < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between pb-5">
        <h3>{arrivaltitle}</h3>
        <div className="newarrivaltopbtn d-flex">
          <div
            className={`arrivalTiArrowLeft ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
          >
            <TiArrowLeft />
          </div>
          <div
            className={`arrivalTiArrowRight ${
              currentIndex + visibleCardsCount >= cards.length ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            <TiArrowRight />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-4 flex-wrap productcard">{visibleCards}</div>
    </div>
  );
};

export default NewArrivalsCarousel;
