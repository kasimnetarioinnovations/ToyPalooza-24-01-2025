import React, { useEffect, useState } from "react";
import Navbarr from "../Navbarr2/Navbarr";
import "../AddToCart/AddToCart.css";
import Flower from "../AddToCart/AddToCartAsset/Images/flower.png";
import { FaStar } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Star from "./AddToCartAsset/Images/star.png";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import ReviewCard from "../ReviewCard/ReviewCard";
import NewArrivalsCarousel from "../NewArrivalsCarousel";
import ProductData from "../../Productdata.json";
import Footer from "../../Components/Footer/Footer";
import Swipers from "../Swiper/Swiper";
import Accordian from "../accordian/Accordian";
import RatingStar from "../RatingStar/RatingStar";
import Hurryupbellicon from "../../Assets/Image/addtocart-bell-icon.png"

const AddToCart = () => {
  //for flower active state
  // const [activeIndex, setActiveIndex] = useState(0); //initially set  the first image active
  // const flowers = [Flower, Flower, Flower, Flower, Flower]; //Array of flower images

 // form data submission logic here

 const initialFormState = {
  name: "",
  prosCons: "",
  review: "",
  rate: 0,
  image: null, //Base64 encoded image here
  isOpenToContact: false, //checkbox 1
  agreesToTerms: false,  //checkbox 2 state
  progress: 0,
};
const [formData, setFormData] = useState(initialFormState);

//handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

//handle rating updates
const handleRatingChange = (rating) => {
  setFormData((prevData) => ({
    ...prevData,
    rate: rating,
  }));
};
//handle checkbox
const handleCheckboxChange = (e) => {
  const { id, checked } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [id]: checked,
  }));
};
// handle the range slider
const handleRangeChange = (e) => {
  setFormData((prevData) => ({
    ...prevData,
    progress: e.target.value,
  }));
};

//file upload
const handleFileUpload = (e) => {
  //file handling
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }
  alert("Image uploaded successfully!");
};

// handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  //saving data to localstorage
  function saveFormData(formData) {
    const existingData = JSON.parse(localStorage.getItem("formDataArray")) || [];
    existingData.push(formData);

    //save data to local storage
    localStorage.setItem("formDataArray", JSON.stringify(existingData));
    console.log('updated data in localstorage', existingData);
  }
  saveFormData(formData);
  alert("data saved locally");
  //stored form data

  // Reset form to initial state
  setFormData(initialFormState);
};

  return (
    <div>
      <Navbarr />
      <div className="section-padding container-fluid Addtocart">
        <div className="">
          <div className="addcart"></div>
            <div className="section-padding addflower">
              <div className="col-md-8 d-none d-md-block flower">
                {/* <div
                  className="d-flex flex-column flowercontainer"
                  style={{ gap: "20px" }}
                >
                  <span
                    style={{
                      border: "2px solid #9c6ff9",
                      borderRadius: "5px",
                      width: "90px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "2px 22px",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      width: "90px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "4px 22px",
                        borderRadius: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")}
                    />
                  </span>
                  <span
                    style={{
                      width: "90px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "4px 22px",
                        borderRadius: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")}
                    />
                  </span>
                  <span
                    style={{
                      width: "90px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "4px 22px",
                        borderRadius: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")}
                    />
                  </span>
                  <span
                    style={{
                      width: "90px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "4px 22px",
                        borderRadius: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")}
                    />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    style={{
                      width: "300px",
                      marginTop: "-380px",
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "2px 22px",
                      }}
                    />
                  </span>
                </div> */}
                <div className="d-flex align-items-center">
                {/* 1st div 5 flower */}
                <div
                  className="d-flex flex-column flowercontainer"
                  style={{ gap: "20px", width:'400px' }}
                >
                  <span
                    style={{
                      border: "2px solid #9c6ff9",
                      borderRadius: "5px",
                      width: "90px", cursor: 'pointer'
                    }}
                  >
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        padding: "2px 22px",
                      }}
                    />
                  </span>
                  
                  <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span>
                  <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span>
                  {/* <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span> */}
                  {/* <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span> */}
                   {/* <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span> */}
                   <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span>
                   <span style={{ width: "90px", borderRadius: '5px', cursor: 'pointer' }}>
                    <img
                      src={Flower}
                      alt="flower1"
                      style={{ width: "100%", padding: "4px 22px", borderRadius: "5px" }}
                      onMouseEnter={(e) => (e.target.style.border = "2px solid #9c6ff9")
                      }
                      onMouseLeave={(e) => (e.target.style.border = "none")
                      }
                    />
                  </span> 
                  
                </div>
                {/* 2nd div one flower */}
                <div className="">
                  <span>
                    <img className="img-fluid"
                      src={Flower}
                      alt="flower1"
                      style={{
                        width: "100%",
                        // maxWidth:'300px',
                        // padding: "2px 22px",
                      }}
                    />
                  </span>
                </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 returncoln">
                  <div className="returnpolicy">
                    <div className="d-flex align-items-center">
                      <p className="returnpara">Return policy</p>
                      <p className="returnpara">Our promises</p>
                      <p className="returnpara">Customer care</p>
                    </div>
                    <p className="returndesc">
                      Easy 30 days return. Polices may vary based on products
                      and promotions. For full details on our Returns Polices,
                      please click here?{" "}
                      <Link to="/" style={{ marginLeft: "0px" }}>
                        click here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <Swipers className="col-md-8" style={{ padding: "0px" }} />
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <p className="butterflypara">
                      Skip Hop zoo little kid Backpack butterfly 3Y+,
                      Multicolour
                    </p>
                  </div>
                  <span
                    className=""
                    style={{
                      backgroundColor: "#e9e2f8",
                      width: "44px",
                      borderRadius: "4px",
                      padding: "4px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      textAlign: "center",
                      color: "#9c6ff9",
                      marginTop: "0px",
                    }}
                  >
                    1-3yrs
                  </span>
                  <span
                    className=""
                    style={{
                      color: "#1E1E1E",
                      fonFamily: "Nunito, serif",
                      fontWeight: "600",
                      lineHeight: "50px",
                      fontSize: "40px",
                    }}
                  >
                    ₹200
                  </span>
                  <div className="d-flex gap-1">
                    <span>
                      <FaStar style={{ color: "#fdb022" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#fdb022" }} />
                    </span>
                    <span>
                      <IoStarHalf style={{ color: "#fdb022" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#f2f4f7" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#f2f4f7" }} />
                    </span>
                    <span
                      className=""
                      style={{
                        fontFamily: "Inter, serif",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "28px",
                        textAlign: "center",
                        color: "#667085",
                      }}
                    >
                      2500 Reviews
                    </span>
                  </div>

                  {/* 1st div */}
                  <div className="adddescqty">
                    <div className="adddescdiv">
                    <div className="adddesc">
                      <p className="desccart">Description</p>
                      <p className="desc-paraadd">
                        Brighten up your child's day with the skip Hop zoo
                        Butterfly Backpack. Designed for toddlers 3 years and
                        up, this multicoloured backpack features a fun butterfly
                        design and is perfect for carrying snacks, toys, and
                        essentials.
                      </p>
                    </div>
                    {/* 2nd div */}
                    <div className="adddesc">
                      <p className="desccart ">Product Dimensions</p>
                      <p
                        className="desc-paraadd"
                        style={{ paddingRight: "10px" }}
                      >
                        Product Dimensions{" "}
                        <span style={{ marginLeft: "20px" }}>
                          62D X 53.1W X 103.5H
                        </span>
                      </p>
                    </div>
                    {/* 3rd div */}
                    <div className="adddesc">
                      <p className="desc-paraadd">
                        Ensure proper fit with adjustable straps; spot clean as
                        needed. Ideal for preschool, outings, and playdates
                      </p>
                    </div>
                    </div>
                    {/* 4th div */}
                    <div className="qty">
                      <p className="qtytxt">QTY</p>
                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ padding: "8px 0px" }}
                      >
                        <p className="">0</p>
                        <p
                          className="minu-plus-icon"
                          style={{
                            border: "2px solid #D9D9D9",
                            borderRadius: "5px",
                            padding: "2px 7px",
                            fontSize: "15px",
                          }}
                        >
                          <span className="">
                            <FaPlus style={{ marginRight: "10px" }} />
                          </span>
                          <span className="">
                            <FaMinus />
                          </span>
                        </p>
                      </div>
                      <p style={{ padding: "8px 0px" }} className="hurryoffertxt">
                        {/* <FaBell
                          style={{
                            fontSize: "20px",
                            color: "#fdb022",
                            fontFamily: "Inter, serif",
                            lineHeight: "22px",
                            fontWeight: 400,
                          }}
                        />{" "} */}
                        <img className="img-fluid" src={Hurryupbellicon} alt="hurryuobellicon" />
                         Hurry! only{" "}
                        <span
                          style={{
                            color: "#000000",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          19
                        </span>{" "}
                        products left
                      </p>
                      {/* buy now div */}
                      <div className="col-12 g-md-3 addtocartbtn">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 addcartbuydiv">
                          {/* Add to cart button */}
                          <button
                            className="col-lg-4 col-md-12 addcartbutton"
                            style={{
                              backgroundColor: "#e9e2f8",
                              padding: "10px",
                              fontFamily: "Inter, serif",
                              color: "#1A1A1A",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "28px",
                              borderRadius: "10px",
                              border: "none",
                              minWidth:"200px"
                            }}
                          >
                            <LiaCartPlusSolid
                              style={{ fontSize: "26px", marginRight: "8px" }}
                            />{" "}
                            Add to cart
                          </button>
                          {/* buy Now Button */}
                          <button
                            className="col-lg-6 col-md-12 buynow"
                            style={{
                              backgroundColor: "#793CFA",
                              padding: "10px 60px",
                              fontFamily: "Inter, serif",
                              color: "#FFFFFF",
                              fontWeight: 300,
                              fontSize: "16px",
                              lineHeight: "28px",
                              borderRadius: "10px",
                              letterSpacing: "1.22px",
                              border: "none",
                              minWidth:"200px"
                            }}
                          >
                            {" "}
                            Buy Now
                          </button>
                        </div>
                      </div>
                      <p
                        className="expectedtxt"
                        style={{
                          padding: "8px 0px",
                          color: "#026B13",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "28px",
                          fontFamily: "Inter, serif",
                          textAlign: "start",
                        }}
                      >
                        Expected delivery on 15 to 20 January
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product details div */}
            <div className="productdetailsdiv d-none d-sm-block">
              <div className="section-padding productdetails">
                <p className="productheading">Product Details</p>
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-md-6 productnamediv">
                    {/* name,type,target section */}
                    <div style={{ padding: "13px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Name
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          3pcs
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Type
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          Hair accessories
                        </p>
                      </div>
                      {/* 3rd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Target age
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          3-5years
                        </p>
                      </div>
                    </div>

                    {/* material,plastic section */}
                    <div style={{ padding: "10px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Primary materials
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          Plastic
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Safety Compilance
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          BPA-free, Non-toxic paints
                        </p>
                      </div>
                      {/* 3rd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Durability
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          Water-resistant
                        </p>
                      </div>
                    </div>

                    {/* Dimension section */}
                    <div style={{ padding: "10px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Dimension
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          10 x 5 x 3 Inches
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Weight
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          200 grams
                        </p>
                      </div>
                      {/* 3rd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Color
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          Pink, Red, Yellow, Orange{" "}
                        </p>
                      </div>
                      {/* 4th div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Removable parts
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          No{" "}
                        </p>
                      </div>
                      {/* 5th div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Assembly required
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          No{" "}
                        </p>
                      </div>
                    </div>

                    {/* cleaning electronics section */}
                    <div style={{ padding: "10px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Cleaning
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          Wipe and dry
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Electronics
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          No
                        </p>
                      </div>
                    </div>
                    {/* Battery operated section */}
                    <div style={{ padding: "10px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Battery-operated
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          No
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Electronic
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          No
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 contentinsidediv">
                    {/* Content inside section */}
                    <div style={{ padding: "13px 0px" }}>
                      {/* 1st div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Content Inside
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          3pcs
                        </p>
                      </div>
                      {/* 2nd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Number of components
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          3
                        </p>
                      </div>
                      {/* 3rd div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          Net Qty
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          1U
                        </p>
                      </div>
                      {/* 4th div */}
                      <div
                        className="d-flex justify-content-between align-item-center nameproduct"
                        style={{ borderBottom: "1px solid #e9e2f8" }}
                      >
                        <p
                          className=""
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          SKU
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "25px",
                            color: "#667085",
                          }}
                        >
                          #PLZ986549362
                        </p>
                      </div>
                    </div>
                    <div className="key">
                      <p className="pkey">Key features</p>
                      <p className="keydesc">
                        Give an Awesome Magical 3Dimensional Effect while
                        writing with these colour stackers .<br /> Mix Two
                        colours and make whatever you write all the more
                        attractive than ever.
                        <br /> This set help a child differentiate between
                        shapes.
                        <br />
                        the child also begins to identify different colours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-padding customersreviewdiv"
              style={{ backgroundColor: "#fcfcfc" }}
            >
              <div className="customersreview">
                <div className="customerpara d-flex justify-content-between d-none d-sm-flex">
                  <p className="consumerp">What Customers Are Saying</p>
                  <p className="seeallconsumer">See all</p>
                </div>
                <div className="">
                  <p
                    className="pproductreviewheading d-flex d-sm-none"
                    style={{
                      fontFamily: "Inter, serif",
                      fontWeight: 600,
                      fontSize: "17px",
                      lineHeight: "22px",
                      color: "#000000",
                    }}
                  >
                    Product Reviews
                  </p>
                </div>
                {/* Honest reviews */}
                <div
                  className="d-flex justify-content-between addtocartbar"
                  style={{ borderBottom: "1px solid #DADADA" }}
                >
                  <div className="readdiv d-flex flex-column justify-content-between col-md-8">
                    <div className="d-flex flex-column">
                      <span className="readpara d-none d-sm-block">
                        Read honest reviews form our amazing customer. We value
                        your feedback and strive to provide the best experience
                        possible join our community of satisfied user and share
                        your thoughts with us.
                      </span>
                      <div>
                        {/* main 4.0 review div */}
                        <div
                          className="d-flex mainfourdiv"
                          style={{ gap: "10px", padding: "20px 0px" }}
                        >
                          {/* left div */}
                          <div
                            className="d-flex align-items-center leftfourpointdiv"
                            style={{
                              gap: "20px",
                              marginRight: "25px",
                              borderRight: "1px solid rgb(199 204 215)",
                            }}
                          >
                            <span
                              className=""
                              style={{
                                fontWeight: 600,
                                fontSize: "50px",
                                lineHeight: "31px",
                                color: "#000000",
                              }}
                            >
                              4.0
                            </span>
                            <div className="d-flex flex-column">
                              <span className="d-flex" style={{ gap: "6px" }}>
                                <span>
                                  <FaStar
                                    style={{
                                      fontSize: "18px",
                                      color: "#fdb022",
                                    }}
                                  />
                                </span>
                                <span>
                                  <FaStar
                                    style={{
                                      fontSize: "18px",
                                      color: "#fdb022",
                                    }}
                                  />
                                </span>
                                <span>
                                  <FaStar
                                    style={{
                                      fontSize: "18px",
                                      color: "#fdb022",
                                    }}
                                  />
                                </span>
                                <span>
                                  <FaStar
                                    style={{
                                      fontSize: "18px",
                                      color: "#fdb022",
                                    }}
                                  />
                                </span>
                                <span>
                                  <FaStar
                                    style={{
                                      fontSize: "18px",
                                      color: "#f2f4f7",
                                    }}
                                  />
                                </span>
                              </span>
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "24px",
                                  color: "#667085",
                                }}
                              >
                                12,200 reviews
                              </span>
                            </div>
                            <span
                              className="fourpointfive d-none d-sm-flex"
                              style={{
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "24px",
                                color: "#667085",
                                marginRight: "10px",
                              }}
                            >
                              4.5 out of 5
                            </span>
                          </div>
                          {/* right div */}
                          <div
                            className="d-flex align-items-center rightfivediv d-none d-sm-flex"
                            style={{ gap: "30px" }}
                          >
                            <div
                              className="d-flex flex-column d-none d-sm-flex"
                              style={{ gap: "10px" }}
                            >
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "28px",
                                  lineHeight: "31px",
                                  color: "#000000",
                                }}
                              >
                                5
                              </span>
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: "16px",
                                  lineHeight: "31px",
                                  color: "#757575",
                                }}
                              >
                                Quality
                              </span>
                            </div>
                            <div
                              className="d-flex flex-column"
                              style={{ gap: "10px" }}
                            >
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "28px",
                                  lineHeight: "31px",
                                  color: "#000000",
                                }}
                              >
                                4
                              </span>
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: "16px",
                                  lineHeight: "31px",
                                  color: "#757575",
                                }}
                              >
                                Value
                              </span>
                            </div>
                            <div
                              className="d-flex flex-column"
                              style={{ gap: "10px" }}
                            >
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "28px",
                                  lineHeight: "31px",
                                  color: "#000000",
                                }}
                              >
                                3
                              </span>
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: "16px",
                                  lineHeight: "31px",
                                  color: "#757575",
                                }}
                              >
                                Service
                              </span>
                            </div>
                            <div
                              className="d-flex flex-column"
                              style={{ gap: "10px" }}
                            >
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "28px",
                                  lineHeight: "31px",
                                  color: "#000000",
                                }}
                              >
                                91%
                              </span>
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: "16px",
                                  lineHeight: "31px",
                                  color: "#757575",
                                }}
                              >
                                Ratings
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* buttons */}
                        <div className="d-none d-sm-block">
                          <button
                            className="leavereviewbtn "
                            style={{
                              padding: "12px 260px",
                              borderRadius: "10px",
                              backgroundColor: "#222027",
                              color: "#F5F5F5",
                              fontSize: "16px",
                              fontWeight: 400,
                              lineHeight: "16px",
                              border: "none",
                            }}
                          >
                            {" "}
                            Leave a review
                          </button>
                          <p
                            className="join d-none d-sm-flex"
                            style={{
                              color: "#667085",
                              lineHeight: "24px",
                              fontWeight: 400,
                              fontSize: "16px",

                              padding: "10px 0px",
                              paddingBottom: "20px",
                            }}
                          >
                            Join thousand of others in sharing your thoughts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* star div */}
                  <div className="stardiv col-md-4">
                    <p className="star">
                      <img src={Star} alt="star" className="starimg" />
                    </p>
                    {/* progress for 4.0 in mobile only */}
                    <div className="fiveprogress position-relative d-lg-none d-md-none">
                      {/* 1 range container */}
                      <span>
                        <p>5</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "80%", backgroundColor: "#7f56d9" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>{`80%`}</p>
                      </span>
                      {/* 2 range container */}
                      <span>
                        <p>4</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "30%", backgroundColor: "#7f56d9" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>{`30%`}</p>
                      </span>
                      {/* 3 range container */}
                      <span>
                        <p>3</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "20%", backgroundColor: "#7f56d9" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>{`0%`}</p>
                      </span>
                      {/* 4 range container */}
                      <span>
                        <p>2</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "20%", backgroundColor: "#7f56d9" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>{`0%`}</p>
                      </span>
                      {/* 5 range container */}
                      <span>
                        <p>1</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "20%", backgroundColor: "#7f56d9" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>{`0%`}</p>
                      </span>
                      {/* end div of fiveprogress */}
                    </div>
                    {/* next div close */}
                  </div>
                </div>
                {/* 5 progressbar */}

                {/* write areview */}
                
                <div className="reviewsection">
                  <p className="reviews">Write a review</p>
                  <span className="helps">Your review helps others.</span>
                </div>
                {/* form */}
                {/* form */}
                <div className="reviewdiv">
                <div class="form-container">
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Akash"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-group">
                      <label htmlFor="prosCons">Pros and Cons</label>
                      <input
                        type="text"
                        id="prosCons"
                        name="prosCons"
                        required
                        placeholder="List the pros and cons"
                        value={formData.prosCons}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-group">
                      <label htmlFor="review">Review</label>
                      <textarea
                        id="review"
                        name="review"
                        required
                        placeholder="Enter a description..."
                        value={formData.review}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <RatingStar rate={formData.rate} onRateChange={handleRatingChange} />
                    <div className="">
                      <span className="excellent">Excellent</span>
                    </div>
                    {/* progress bar */}
                    <div class="form-group" style={{ padding: "10px 0px" }}>
                      <label htmlFor="progress" class="goodprogresslabel">
                        How good we are?
                      </label>
                      <div className="progress-wrapper">
                        <div className="progress-indicator">None</div>
                        <input
                          type="range"
                          id="range"
                          value={formData.progress}
                          min="0"
                          max="100"
                          onChange={handleRangeChange}
                          className="progress-slider p-0"
                          style={{
                            "--progress": `${formData.progress}%`, // Use backticks to wrap the template literal
                            height: "10px",
                          }}
                        />
                        <div
                          className="progress-indicator"
                          style={{ left: `calc(${formData.progress}% - 10px)` }}
                        >
                          {formData.progress}%
                        </div>
                      </div>
                    </div>
                    {/* upload a picture */}
                    <div style={{ padding: "5px 0px" }}>
                      <label htmlFor="upload" class="upload">
                        Upload a picture
                      </label>
                      <p
                        className="d-lg-none d-md-none "
                        style={{
                          width: "100%",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "#6D6D6D",
                        }}
                      >
                        Add your documents here, and you can upload up to 5
                        files max{" "}
                      </p>
                    </div>
                    <div
                      class="form-group"
                      style={{
                        border: "2px dashed #ccc",
                        padding: "20px",
                        textAlign: "center",
                        borderRadius: "10px",
                        margin: "0 auto",
                        width: "100%",
                      }}
                    >
                      {/* upload picture */}
                      <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ gap: "4px" }}
                      >
                        <BsCloudUpload
                          style={{ color: "#191D23", fontSize: "24px" }}
                        />

                        <input
                          type="file"
                          id="upload"
                          name="upload"
                          accept="image/*"
                          onChange={handleFileUpload}
                          style={{ display: "none" }} // Hides the input field
                        />
                        <span
                          className="browseplaceholder"
                          style={{
                            color: "#191D23",
                            fontWeight: 300,
                            fontSize: "14px",
                            lineHeight: "19px",
                          }}
                        >
                          {formData.image && (
                            <div>
                              <img
                                src={formData.image}
                                alt="Upload Preview"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          )}
                          Browse and choose the files you want to upload from
                          your computer
                        </span>
                        <span
                          style={{
                            backgroundColor: "#7f56d9",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            color: "#FFFFFF",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            document.getElementById("upload").click()
                          } // Manually triggers file dialog
                        >
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                    <div
                      class="checkbox-container d-flex align-items-center gap-4"
                      style={{ padding: "10px" }}
                    >
                      <input type="checkbox" id="isOpenToContact" checked={formData.isOpenToContact} onChange={handleCheckboxChange} />
                      <label className="tickme" htmlFor="isOpenToContact">
                        I am open to being contacted for follow-up questions.
                      </label>
                    </div>
                    <div
                      class="checkbox-container d-flex align-items-center gap-4"
                      style={{ padding: "10px" }}
                    >
                      <input type="checkbox" id="agreesToTerms" checked={formData.agreesToTerms} onChange={handleCheckboxChange} />
                      <label className="tickme" htmlFor="agreesToTerms">
                        I agree to the terms and conditions to the use of my review
                        in marketting materials.
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "20px 0px",
                      }}
                    >
                      <button className="submitbtn"
                        type="submit"

                        style={{
                          width: "100%",
                          padding: "10px 0px",
                          border: "none",
                          borderRadius: "10px",
                          backgroundColor: "#7f56d9",
                          color: "#F5F5F5",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Inter, serif",
                          cursor: "pointer",
                          transition: "background 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#6a45b5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#7f56d9")
                        }
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <ReviewCard />
              </div>
              {/* new arrivals */}
             <div className="py-5">
             <NewArrivalsCarousel arrivaltitle="Related Products"
                heading="Related Products"
                data={ProductData}
              />
             </div>
              <Accordian />
            </div>
            <Footer />
      
        </div>
      
        {/* end row div */}
      </div>
      
     
    </div>
  );
};

export default AddToCart;
