import React from 'react'
import '../../Pages/Toys/Toys.css'

import Toysfilter from "../../Components/Toysfilter/Toysfilter";
import Toyscuratedcarousel from "../../Pages/Toys/Toyscuratedcarousel";
// import {Link} from "react-router-dom";
import Heroallpages from '../../Components/Heroallpages/Heroallpages';
import herotoysimage from "../../Assets/Image/toyspageimg.png";
const Toys = () => {
  return (
    <div >
    {/* <div className='toys-hero-section section-padding'>
         <div className="herotext d-flex  align-items-center gap-2 ">
         <p>Home<MdOutlineKeyboardArrowRight /></p>
            <p>Categories<MdOutlineKeyboardArrowRight /></p>
            <p>Toys<MdOutlineKeyboardArrowRight /></p>
         </div>
          <div >
          <img className='w-100' src={herotoysimage} alt="herotoysimage" />
          </div>
    </div> */}
    <Heroallpages link='/toys' hero_nav="Toys" heroallpageimg={herotoysimage} />
    <div className='section-padding'>
    <Toysfilter/>
    <div className='toyscuratedcarouselmain' style={{paddingBottom:"300px"}}>
    <Toyscuratedcarousel/>
    </div>
    </div>
    <div>
       {/* <img className='img-fluid' src={cloud_img} alt="cloud_img" /> */}
    </div>
     </div>
  )
}

export default Toys