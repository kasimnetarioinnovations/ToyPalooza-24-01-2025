import React, { useState } from "react";
import Navbarr from "../Navbarr/Navbarr";
import "../CheckOut/CheckOut.css";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
// import { BiChevronDown } from "react-icons/bi";
// import Indianflag from "../../Assets/Image/indianflag.png";
import { BiUser } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FiCheck } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import UPI from "../CheckOut/CheckOutImages/UPI.png";
import Paypal from "../CheckOut/CheckOutImages/paypal.png";
import MasterCard from "../CheckOut/CheckOutImages/mastercard.png";
import { FiLock } from "react-icons/fi";
import QuantityCart from "../QuantityCart/QuantityCart";
import Gift from "../CheckOut/CheckOutImages/Group.png";
import Happy from "../CheckOut/CheckOutImages/happy.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";

const CheckOut = () => {
  // const [phone, setPhone] = useState("");
  const initialCheckoutFormState = {
    email:"",
    phone1:"",
    phone2:"",
    firstName:"",
    lastName:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    postalCode:"",
    cardNumber:"",
    cardholderName:"",
    expiryDate:"",
    csv:"",
    paymentOption:"",
  }
  const [formData, setFormData] = useState(initialCheckoutFormState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }
  
  const handlePhoneoneChange = (phone1) => {
    setFormData((prev) => ({...prev, phone1}));
  }
  const handlePhonetwoChange = (phone2) => {
    setFormData((prev) => ({...prev, phone2}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    function saveCheckoutFormData(formData) {
      const existingCheckoutFromData = JSON.parse(localStorage.getItem("checkoutFormDataArray")) || [];
      existingCheckoutFromData.push(formData);
    
    localStorage.setItem("checkoutFormDataArray", JSON.stringify(existingCheckoutFromData));
    console.log('Updated Data in local storage', existingCheckoutFromData);
  };
  saveCheckoutFormData(formData);
  alert('Form data saved successfully');

  setFormData(initialCheckoutFormState);
  };

  return (
    <>
      <div>
        <Navbarr />
        <div className="container-fluid CheckOut">
          <div className="row align-items-center">
            <div className="checkout"></div>{" "}
            {/* backtocart and checkout div */}
            <div className="checkoutheadingdiv">
            <Link to='/addtocart' style={{color:'none'}} className="backtocart"> 
              <p>
                <span>
                  <FiArrowLeft />
                </span>
                <span>Back to cart</span>
              </p>
              </Link>
              <p className="checkoutheading">Checkout</p>
            </div>
            <div className="checkoutpage">
              {/* left div */}
              <div className=" col-md-7 col-sm-12 leftdiv">
                <div className="contactcartdiv">
                  <p className="contactcartheading">Contact Information</p>
                  <form action="" onSubmit={handleSubmit}>
                    {/* contact */}
                    <div className="contact">
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="email" className="labelname">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="staravinash25@gmail.com"
                          className="form-input"
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
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="number" className="labelname">
                          Phone Number
                        </label>
                        <PhoneInput
                          className="form-input checkout-group"
                          country={"in"}
                          enableSearch={true}
                          value={formData.phone1}
                          onChange={handlePhoneoneChange}
                          inputStyle={{
                            width: "100%",
                            padding: "8px 50px",

                          }}
                        />
                      </div>
                    </div>
                    {/* shipping information */}
                    <p className="contactcartheading">Shipping Information</p>
                    <div className="contact">
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="firstName" className="labelname">
                          First Name
                        </label>
                        <input
                          type="firstName"
                          name="firstName"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Kishore"
                          className="form-input"
                          style={{ paddingLeft: "30px" }}
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
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="lastName" className="labelname">
                          Last Name
                        </label>
                        <input
                          type="lastName"
                          name="lastName"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Jha"
                          style={{ paddingLeft: "30px" }}
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
                    </div>
                    {/* address 1 */}
                    <div className="form-group form-payment address checkout-group">
                      <label htmlFor="address1" className="labelname">
                        Address 1
                      </label>
                      <input
                        type="address1"
                        name="address1"
                        id="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                        required
                        placeholder="78, Rosewood Apartment, Sector 15, Plot 9"
                        className="form-input"
                        style={{ paddingLeft: "30px" }}
                      />
                      <HiOutlineLocationMarker
                        style={{
                          position: "absolute",
                          color: "#667085",
                          top: "70%",
                          left: "10px",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                    {/* address 2 */}
                    <div className="form-group form-payment address checkout-group">
                      <label htmlFor="address2" className="labelname">
                        Address 2
                      </label>
                      <input
                        type="address2"
                        name="address2"
                        id="address2"
                        required
                        value={formData.address2}
                        onChange={handleInputChange}
                        placeholder="Noida Uttar Pradesh, 201301"
                        className="form-input"
                        style={{ paddingLeft: "30px" }}
                      />
                      <HiOutlineLocationMarker
                        style={{
                          position: "absolute",
                          color: "#667085",
                          top: "70%",
                          left: "10px",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                    {/* country */}
                    <div className="contact">
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="email" className="labelname">
                          Phone Number
                        </label>
                        <PhoneInput
                          className="form-input checkout-group"
                          country={"in"}
                          enableSearch={true}
                          value={formData.phone2}
                          onChange={handlePhonetwoChange}
                          inputStyle={{
                            width: "100%",
                            padding: "8px 50px",
                          }}
                        />
                      </div>
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="city" className="labelname">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="Noida"
                          style={{ paddingLeft: "30px" }}
                        />
                        <TiLocationArrowOutline
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
                    {/* State */}
                    <div className="contact">
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="state" className="labelname">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          placeholder="Uttar Pradesh"
                          className="form-input"
                          style={{ paddingLeft: "40px" }}
                        />
                        <TiLocationArrowOutline
                          style={{
                            position: "absolute",
                            color: "#667085",
                            top: "70%",
                            left: "10px",
                            transform: "translateY(-50%)",
                          }}
                        />
                      </div>
                      <div className="form-group form-payment checkout-group">
                        <label htmlFor="postalcode" className="labelname">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          required
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="201301"
                          style={{ paddingLeft: "30px" }}
                        />
                        <TiLocationArrowOutline
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
                    {/* credit/debit card */}
                    <div className="creditcarddiv">
                      <div className="creditdebit">
                        <span
                          className="d-flex align-items-start"
                          style={{ gap: "15px" }}
                        >
                          <FiCheck
                            style={{ color: "#101828", fontSize: "25px" }}
                          />
                          <p className="d-flex flex-column">
                            <span className="creditspan">
                              Credit/Debit Card
                            </span>
                            <span className="visaspan">
                              Visa, Mastercard, America
                            </span>
                          </p>
                        </span>
                        <span>
                          <AiOutlineQuestionCircle
                            style={{ color: "#667085" }}
                          />
                        </span>
                      </div>
                      {/* cardnamediv */}
                      <div className="contact">
                        <div className="form-group form-payment checkout-group">
                          <label htmlFor="cardnumber" className="labelname">
                            Card no.
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            id="cardnumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            placeholder="1234 1234 1234 1234"
                            className="form-input"
                          />
                        </div>
                      </div>
                      {/* cardholdername, expirydate and csv */}
                      {/* cardnamediv */}
                      <div className="contact">
                        <div className="form-group form-payment checkout-group">
                          <label htmlFor="cardname" className="labelname">
                            Cardholder name
                          </label>
                          <input
                            type="text"
                            name="cardholderName"
                            id="cardname"
                            value={formData.cardholderName}
                            onChange={handleInputChange}
                            required
                            placeholder="KISHOR JHA"
                            className="form-input"
                          />
                        </div>
                        <div
                          className="d-flex"
                          style={{ gap: "10px", maxWidth: "220px" }}
                        >
                          {/* expiry  */}
                          <div className="form-group form-payment">
                            <label htmlFor="expirydate" className="labelname">
                              Expiry date
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              id="expiry"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              required
                              placeholder="09/25"
                              className="form-input"
                            />
                          </div>
                          {/* csv  */}
                          <div className="form-group form-payment">
                            <label htmlFor="csv" className="labelname">
                              CSV
                            </label>
                            <input
                              type="text"
                              name="csv"
                              id="csv"
                              value={formData.csv}
                              onChange={handleInputChange}
                              required
                              placeholder="06/25"
                              className="form-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* paypal, mastercard, upi */}
                    <div className="paymentcard">
                      {/* paypal div */}
                      <div className="paypaldiv">
                        <p className="d-flex align-items-center gap-3">
                          <input
                            type="radio"
                            id="paypalOption"
                            name="paymentOption"
                            value="paypal"
                            checked={formData.paymentOption === "paypal"}
                            onChange={handleInputChange}
                            color="#49454F"
                          />
                          {/* heading, para */}
                          <p className="d-flex flex-column">
                            <span className="cardname">Paypal</span>
                            <span className="paysecure">Pay securely</span>
                          </p>
                        </p>
                        <p>
                          <img src={Paypal} alt="paypal" />
                        </p>
                      </div>
                      {/* mastercard div */}
                      <div className="mastercard">
                        <p className="d-flex align-items-center gap-3">
                          <input
                            type="radio"
                            id="mastercardOption"
                            name="paymentOption"
                            value="mastercard"
                            checked={formData.paymentOption === "mastercard"}
                            onChange={handleInputChange}
                            color="#49454F"
                          />
                          {/* heading, para */}
                          <p className="d-flex flex-column">
                            <span className="cardname">Mastercard</span>
                            <span className="paysecure">
                              For everything else, there's Mastercard
                            </span>
                          </p>
                        </p>
                        <p>
                          <img src={MasterCard} alt="mastercard" />
                        </p>
                      </div>
                      {/* upi div */}
                      <div className="upi">
                        <p className="d-flex align-items-center gap-3">
                          <input
                            type="radio"
                           id="upiOption"
                           name="paymentOption"
                            value="upi"
                            checked={formData.paymentOption === "upi"}
                            onChange={handleInputChange}
                            color="#49454F"
                          />
                          {/* heading, para */}
                          <p className="d-flex flex-column">
                            <span className="cardname">UPI</span>
                            <span className="paysecure">
                              Har Payment Digital
                            </span>
                          </p>
                        </p>
                        <p>
                          <img src={UPI} alt="upi" />
                        </p>
                      </div>
                    </div>
                    {/* secure checkout */}
                    <div className="checkoutbtndiv">
                      <button className="checkoutbtn" type="submit">
                        <FiLock style={{ fontSize: "15px" }} />
                        Secure Checkout
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* right div */}
              <div className=" col-md-5 col-sm-12 rightcontainer">
                {/* 1st div */}
                <div
                  className="d-flex flex-column"
                  style={{
                    gap: "20px",
                    backgroundColor: "#F9F9F9",
                    padding: "20px"
                  }}
                >
                  <QuantityCart />
                  <QuantityCart />
                  <QuantityCart />
                  {/* next div */}
                  <div className="subtotal">
                    <p
                      className="d-flex justify-content-between"
                      style={{ borderBottom: "1px solid #DADADA" }}
                    >
                      <span>Subtotal</span>
                      <span>₹200</span>
                    </p>
                    <p
                      className="d-flex justify-content-between"
                      style={{ borderBottom: "1px solid #DADADA" }}
                    >
                      <span>Shipping details</span>
                      <span>₹200</span>
                    </p>
                    <p
                      className="d-flex justify-content-between"
                      style={{ borderBottom: "1px solid #DADADA" }}
                    >
                      <span>Subtotal</span>
                      <span>₹200</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* happy buying */}
            <div className="happingbuying">
              <span>
                <img src={Happy} alt="happy-img" width='100%' />
              </span>
              <span>
                <img src={Gift} alt="gift-img" width='100%' />
              </span>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CheckOut;
