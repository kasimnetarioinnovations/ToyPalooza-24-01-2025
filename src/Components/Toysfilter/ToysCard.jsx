
import React from "react";
import "../Card/Card.css";
import "../../Components/Toysfilter/Toysfilter.css"
import "../../Components/Toysfilter/Toysfilter.css"
// import cardimage from "../../Assets/Image/cardimage.jpg"
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import measurefiltericon from "../../Assets/Image/measurefiltericon.png"
import { Link } from "react-router-dom";

export default function ToysCard({imageUrl, title, subtitle, oldPrice, newPrice, levelRange}) {
  return (
    <div className="">
      <div className="card toyscard">
        <div className="position-relative">
        <Link to="/whislist"><LuHeart className='position-absolute' style={{ margin: "5px 10px", fontSize: "20px" }} /></Link>
        <img src={imageUrl} alt="" className="cardimage" />
        </div>
        
        <div className="carddescription carddescription-toys">
          <div className="pricing toyscard-rating">
            <p  className="m-0"> <b>{title}</b></p>
            <p className="m-0">
            <del style={{color:"gray"}}> ₹{oldPrice}</del> <span>
              
              <b>₹{newPrice}</b></span>
            </p>
            <p className="m-0 toyscaradsubtitle">{subtitle}</p>
          </div>
          <div className="rating ">
          <div className="staricon"><FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            <div className="level">

                <div className="measureicon"><img src={measurefiltericon} alt="measurefiltericon" /></div>
              <div className="level_details d-flex flex-column align-items-center justify-content-center">
                <p style={{color:'grey'}}>Level</p>
                <p style={{margin:0, color:'blue'}}>{levelRange}</p>
              </div>
            </div>
          </div>
         </div>
        <div className="d-flex justify-content-center"><button className= "btn toyscardbtn"><CiShoppingCart className="shoppingicon" />Add to card</button></div>
      </div>
    </div>
  );
}

