import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerlogo from '../../Assets/Image/website-logo.png'
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
   <div className="wrapper section-padding footer-bg ">
       
        <footer className='main-footer'>
          <hr className='hrfooter'/>
          <div className="footer-social-icon">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          </div>
          <div className="footer-main-content">

            <div className='footer-content1'>
             <div className='d-flex align-items-center  gap-3'>
             <img src={footerlogo} alt="footer-logo" />
             <p className='m-0'><b>PlayPalooza</b></p>
             </div>
             <div>
              <p style={{color:"#667085"}}>Buy amazing toys for your young ones that create more happiness in your world.</p>
             </div>
            </div>

             <div className='footer-right-content'>
         <div className='footer-content-link'>
          <div className='footer-content2'>
               <div><b>Product</b></div>
                <ul className='footer-content2-link'>
                  <Link><li>Girls</li></Link>
                  <Link><li>Boys</li></Link>
                  <Link><li>Stationary <span className="footerlinknew">New</span></li></Link>
                  <Link to="/toys"><li>Toys</li></Link>
                  <Link><li>Carry Bags</li></Link>
                  <Link><li>Hair accessories <span className="footerlinknew">New</span></li></Link>
                </ul>
            </div>
              
            <div className='footer-content3'>
            <div><b>Resources</b></div>
                <ul className='footer-content3-link'>
                  <Link><li>Blog</li></Link>
                 <Link> <li>Newsletter</li></Link>
                  <Link to="/faq"><li>Help centre</li></Link>
                 <Link> <li>Contact us</li></Link>
                  <Link><li>Shipping policy</li></Link>
                 <Link> <li>Refund policy</li></Link>
                </ul>
            </div>
          </div>

            <div className='footer-content4'>
            <div><b>Stay up to date</b></div>
            <div className='subscribe-btn'>
              <input type="email" placeholder='Enter your email' />
              <button>Subscribe</button>
            </div>
            </div>
         </div>
         </div>
      
          <div className="footer-bottom-content ">
            <div className='copyright'><p>© 2074 Kasper UI. All rights reserved.</p></div>
            <div className='condition'>
             <a href="#">Term</a>
            <Link to="/policy">Privacy</Link>
             <a href="#">Cookies</a>
            </div>
          </div>
         
        </footer>
   </div>
  )
}

export default Footer
