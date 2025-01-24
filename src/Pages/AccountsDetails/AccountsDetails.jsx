import React, {useState} from "react";
import "../AccountsDetails/AccountsDetails.css";
// import Navbarr from "../Navbarr/Navbarr";
// import Sidebar from "../sidebar/Sidebar";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";
import Heroallpages2 from "../../Components/Heroallpages2/Heroallpages2";
import { CiUser } from "react-icons/ci";


const AccountsDetails = () => {
  const initialAccountDetails = {
    name:"",
    email:"",
    phone:"",
    currentemail:"",
    newemail:"",
    confirmemail:""
  }
  const [formData, setFormData] = useState(initialAccountDetails);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    function saveAccountFormData(formData) {
      const existingAccountFormData = JSON.parse(localStorage.getItem("accountFormDataArray")) || [];
      existingAccountFormData.push(formData)
      localStorage.setItem("accountFormDataArray", JSON.stringify(existingAccountFormData));
      console.log("Updated data in local storage", existingAccountFormData);
    }
    saveAccountFormData(formData);
    alert("Form data saved successfully");
    setFormData(initialAccountDetails);
  }
  return (
    <div>
    
    <div>
      <Heroallpages2 profile_nav="Account Details"/>
      <div className="whishlit-sidebar section-padding pt-0">
           <div className='whishlit-sidebar-container bg-white d-flex justify-content-evenly align-items-center' style={{padding:"20px 30px"}}>
           <div className="leftwhishlist-sideb">
            <ul className='list-unstyled text-black'>
               <Link style={{color:"black", fontWeight:"bold"}}><li>Account details</li></Link> 
                <Link style={{color:"black", fontWeight:"bold"}}><li>Orders History</li></Link>
                <Link to="/whislist" style={{color:"black", fontWeight:"bold"}}><li>Wishlist</li></Link>
                <Link to="/address_book" style={{color:"black", fontWeight:"bold"}}><li>Address book</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Recent Activity</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Support & Help</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Order Tracking</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Reviews & Ratings</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}> <li>Logout</li></Link>
            </ul>
           </div>
           <div className="righttwhishlist-product-card accountdetailscard d-flex gap-5">
           <div className="generalformdiv">
                <form action="" onSubmit={handleSubmit}>
                  {/* main div for form */}
                  <div className="d-flex gap-5 mainformdiv" style={{padding:'20px 0px'}}>
                  {/* first div of form */}
                  <div className="w-50 firstformdiv">
                  <p
                  className=""
                  style={{
                    color: "#121212",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "24px",
                    paddingBottom: "20px",
                  }}
                >
                  General
                </p>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="name" className="labelname">
                     Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Name"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <BiUser
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="email" className="labelname">
                      Email 
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="kishore@gmail.com"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <HiOutlineMail
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="phone" className="labelname">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone Number"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <FiPhone
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  </div>
                  {/* 2nd div for form */}
                  <div className="w-50 secondformdiv">
                  <p
                  className=""
                  style={{
                    color: "#121212",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "24px",
                    paddingBottom: "20px",
                  }}
                >
                  Change Password
                </p>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="currentemail" className="labelname">
                     Current
                    </label>
                    <input
                      type="email"
                      name="currentemail"
                      id="currentemail"
                      value={formData.currentemail}
                      onChange={handleInputChange}
                      required
                      placeholder="olivia@gmail.com"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <AiOutlineEye
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="newemail" className="labelname">
                      New
                    </label>
                    <input
                      type="email"
                      name="newemail"
                      id="newemail"
                      value={formData.newemail}
                      onChange={handleInputChange}
                      required
                      placeholder="olivia@gmail.com"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <AiOutlineEye
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  <div className="form-group checkout-group position-relative">
                    <label htmlFor="confirmemail" className="labelname">
                      Confirm New 
                    </label>
                    <input
                      type="email"
                      name="confirmemail"
                      id="confirmemail"
                      value={formData.confirmemail}
                      onChange={handleInputChange}
                      required
                      placeholder="olivia@gmail.com"
                      className="form-inputs"
                      style={{
                        paddingLeft: "30px",
                        color: "#1E1E1E",
                        lineHeight: "16px",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    />
                    <AiOutlineEye
                      style={{
                        position: "absolute",
                        color: "#667085",
                        top: "70%",
                        left: "10px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                  </div>
                  </div>
                  <div className="checkoutbtndiv">
                    <button className="accountbtn" type="submit">
                      Update 
                    </button>
                    <p
                      style={{
                        color: "#667085",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                    </p>
                  </div>
                </form>
              </div>
         
           </div>
           </div>
           
          </div>
    </div>         
          
 
    </div>
  );
};

export default AccountsDetails;
