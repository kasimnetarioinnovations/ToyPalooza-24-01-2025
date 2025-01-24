import React, { useState, useEffect } from "react";
import './Navbar.css' ;
import './Navbarr.css';
import { BiChevronDown } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Website from "../../Assets/Image/website-logo.png";
import { GiDuck } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs"; //icon
import { BiBookAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { GiComb } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css"; //mention this
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Flag from "../../Assets/Image/indianflag.png";


const Navbars = () => {


  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  return (
    <>
     
    

      {isAuthenticated ? (
         <div> 
         <div className="mobile bg-body-tertiary">
           {/* 1st div */}
           <div className="" style={{ display: "flex", gap: "10px" }}>
             <span>
               <FiPhoneCall style={{ fontSize: "22px" }} />
             </span>
             <span className="topheader2num">+91 8888 4444 20</span>
           </div>
           {/* 2nd div */}
           <div className="" style={{ display: "flex", gap: "10px" }}>
             <span>
               <FaCarSide style={{ color: "#f9c542", fontSize: "30px" }} />
             </span>
             <span className="topheader2txt">
               Free shipping on orders above 799
             </span>
             <span className="px-2">
               English
               <BiChevronDown />
             </span>
           </div>
         </div>
         <div className="d-flex justify-content-between align-items-center bg-body-tertiary login d-none d-sm-block d-md-none d-lg-flex">
           <div className="logo d-flex align-items-center ">
             <img src={Website} alt="" />
             <a className="navbar-brand p-0" href="/">
               PlayPaloozo
             </a>
           </div>
           <div className="d-flex align-items-center gap-3 searchdiv">
             {/* 1st span */}
             <span
               className="d-flex align-items-center justify-content-center"
               style={{
                 backgroundColor: "#f3f5fa",
                 padding: "6px",
                 borderRadius: "10px",
                 fontSize: "20px",
                 width: "35px",
                 height: "35px",
               }}
             >
               <CiSearch />
             </span>
             {/* 2nd span */}
             <span
               className="d-flex align-items-center justify-content-center"
               style={{
                 backgroundColor: "#ffff",
                 padding: "2px",
                 borderRadius: "10px",
                 fontSize: "20px",
                 width: "50px",
                 height: "35px",
               }}
             >
               {" "}
               <img src={Flag} alt="" className="" style={{ width: "20px" }} />
               <RiArrowDropDownLine style={{ fontSize: "30px" }} />
             </span>
             {/* 3rd span */}
             <span
               className="d-flex align-items-center justify-content-center"
               style={{
                 backgroundColor: "#ffff",
                 padding: "6px",
                 borderRadius: "10px",
                 fontSize: "20px",
                 width: "35px",
                 height: "35px",
               }}
             >
               <CiUser />
             </span>
             {/* 4th span */}
             <span
               className="d-flex align-items-center justify-content-center"
               style={{
                 backgroundColor: "#ffff",
                 padding: "6px",
                 borderRadius: "10px",
                 fontSize: "20px",
                 width: "35px",
                 height: "35px",
               }}
             >
               <CiShoppingCart />
             </span>
           </div>
         </div>
   
         <div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary ">
             <div className="container-fluid navbarrtwobottom" >
               <div className="logos d-flex align-items-center d-lg-none">
                 <img src={Website} alt="" />
                 <a className="navbar-brand p-0" href="/">
                   PlayPaloozo
                 </a>
               </div>
               <button
                 className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                 aria-label="Toggle navigation"
               >
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div
                 className="collapse navbar-collapse"
                 id="navbarSupportedContent"
               >
                 <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">
                       <Link
                         to={"/"}
                         style={{ fontSize: "20px", color: "#333946" }}
                       >
                        <span>  Home</span>
                       </Link>
                     </a>
                   </li>
                   <li className="nav-item dropdown">
                     <a
                       className="nav-link dropdown-toggle"
                       href="#"
                       role="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                     >
                      <span> Categories</span>
                     </a>
                     <ul className="dropdown-menu">
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                         Toys{" "}
                         <span
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>
                       </span>
   
                       <span>
                         <Link
                           to="/toys" // Use the path defined in your routes
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                             textDecoration: "none",
                             display: "block",
                             fontSize: "16px",
                             padding: "5px 40px",
                             // marginBottom: "1rem",
                           }}
                         >
                           <p style={{}}>
                             See more <BsArrowRight />
                           </p>
                         </Link>
                       </span>
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <BiBookAlt
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />
                         Stationary{" "}
                       </span>
                      <span>
                       <Link to="/stationary"> 
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
                       </Link>
                      </span>
   
                       <span className="d-flex align-items-center justify-content-around px-3 w-80">
                         <GiComb
                           className="mx-2"
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Hair Access{" "}
                         <span
                           className="mx-2"
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>{" "}
                       </span>
                       <span>
                        <span>
                         <Link to="/hairpage">
                         <p
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                           }}
                         >
                           See more <BsArrowRight />
                         </p>
                         </Link>
                        </span>
                       </span>
                       <span className="d-flex align-items-center justify-content-around px-3  w-75">
                         <BiShoppingBag
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Bag Access
                       </span>
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
                     </ul>
                   </li>
                   <li className="nav-item dropdown">
                     <a
                       className="nav-link dropdown-toggle"
                       href="#"
                       role="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                     >
                      <span> Boys</span>
                     </a>
                     <ul className="dropdown-menu">
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                         Toys{" "}
                         <span
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>
                       </span>
                       <span>
                         <p
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                           }}
                         >
                           See more <BsArrowRight />
                         </p>
                       </span>
   
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <BiBookAlt
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />
                         Stationary{" "}
                       </span>
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
   
                       <span className="d-flex align-items-center justify-content-around px-3 w-80">
                         <GiComb
                           className="mx-2"
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Hair Access{" "}
                         <span
                           className="mx-2"
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>{" "}
                       </span>
                       <span>
                         <p
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                           }}
                         >
                           See more <BsArrowRight />
                         </p>
                       </span>
                       <span className="d-flex align-items-center justify-content-around px-3  w-75">
                         <BiShoppingBag
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Bag Access
                       </span>
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
                     </ul>
                   </li>
                   <li className="nav-item dropdown">
                     <a
                       className="nav-link dropdown-toggle"
                       href="#"
                       role="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                     >
                     <span>Girl</span>
                     </a>
                     <ul className="dropdown-menu">
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                         Toys{" "}
                         <span
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>
                       </span>
                       <span>
                         <p
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                           }}
                         >
                           See more <BsArrowRight />
                         </p>
                       </span>
   
                       <span className="d-flex align-items-center justify-content-around px-3 w-75">
                         <BiBookAlt
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />
                         Stationary{" "}
                       </span>
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
   
                       <span className="d-flex align-items-center justify-content-around px-3 w-80">
                         <GiComb
                           className="mx-2"
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Hair Access{" "}
                         <span
                           className="mx-2"
                           style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                         >
                           New
                         </span>{" "}
                       </span>
                       <span>
                         <p
                           style={{
                             textAlign: "center",
                             color: "#8565d1",
                             fontWeight: "600",
                             borderRadius: "10px",
                           }}
                         >
                           See more <BsArrowRight />
                         </p>
                       </span>
                       <span className="d-flex align-items-center justify-content-around px-3  w-75">
                         <BiShoppingBag
                           style={{ color: "#8565d1", fontSize: "25px" }}
                         />{" "}
                         Bag Access
                       </span>
                       <p
                         style={{
                           textAlign: "center",
                           color: "#8565d1",
                           fontWeight: "600",
                           borderRadius: "10px",
                         }}
                       >
                         See more <BsArrowRight />
                       </p>
                     </ul>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" aria-current="page" href="#">
                      <span> Stationary</span>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
         </div>
       </div>
      ) : (
        <div>
        <div className="mobile bg-body-tertiary">
          {/* 1st div */}
          <div className="topnav" style={{ display: "flex", gap: "10px" }}>
            <span>
              <FiPhoneCall style={{ fontSize: "22px" }} />
            </span>
            <span className="topheadernumber">+91 8888 4444 20</span>
          </div>
          {/* 2nd div */}
          <div className="" style={{ display: "flex", gap: "10px" }}>
            <span>
              <FaCarSide style={{ color: "#f9c542", fontSize: "30px" }} />
            </span>
            <span className="topheadertxt">
              Free shipping on orders above 799
            </span>
            <span className="topheadertxt px-2">
              English
              <BiChevronDown />
            </span>
          </div>
        </div>

        <nav className="navbar  navbar-expand-lg  bg-body-tertiary">
          <div className="container-fluid main-nav">
            <div className="logo d-flex align-items-center ">
              <img src={Website} alt="" />
              <a className="navbar-brand p-0" href="/">
                PlayPalooza
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span>Home </span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Categories</span>
                  </a>
                  <ul className="dropdown-menu">
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>

                    <span>
                      <Link
                        to="/toys" // Use the path defined in your routes
                        style={{
                          // textAlign: "center",
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          // fontSize: "15px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          display: "block",
                          padding: "5px 40px",
                          // marginBottom: "16px"
                        }}
                      >
                        <p>
                          See more <BsArrowRight />
                        </p>
                      </Link>
                    </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                  <span>
                    <Link to="/stationary">
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                    </Link>
                  </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <Link
                        to="/hairpage" // Use the path defined in your routes
                        style={{
                          // textAlign: "center",
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          // fontSize:"15px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          display: "block",
                          padding: "5px 40px",
                          // marginBottom: "16px"
                        }}
                      >
                        <p>
                          See more <BsArrowRight />
                        </p>
                      </Link>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span> Boys</span>
                  </a>
                  <ul className="dropdown-menu">
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>

                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span> Girl</span>
                  </a>
                  <ul className="dropdown-menu">
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>

                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    <span > <Link to="stationary" style={{  color: "grey"}}>Stationary</Link></span>
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <div className="d-flex justify-content-around align-items-center">
                  <div className="d-flex gap-4 seemore">
                  {isAuthenticated ? (
        <button
          type="button"
          className="login-btn"
          style={{
            backgroundColor: "transparent",
            color: "#676969",
          }}
        
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="login-btn"
          style={{
            backgroundColor: "transparent",
            color: "#676969",
          }}
    
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
                    <button
                      className="login-btn loginshop"
                      style={{ backgroundColor: "#8565d1", color: "white" }}
                    >
                      Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
      </div>
      )}
    </>
  );
};

export default Navbars;