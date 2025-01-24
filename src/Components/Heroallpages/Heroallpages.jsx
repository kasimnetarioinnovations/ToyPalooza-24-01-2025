import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Heroallpages = ({ hero_nav, heroallpageimg, link}) => {
  return (
    <div>
      <div className='toys-hero-section section-padding'>
        <div className="herotext d-flex align-items-center gap-2">
         <Link to='/' style={{color:"#212529"}}><p>Home<MdOutlineKeyboardArrowRight /></p></Link>
          <p>Categories<MdOutlineKeyboardArrowRight /></p>
          <Link to={link}><p style={{textDecoration:"underline"}}>{hero_nav}<MdOutlineKeyboardArrowRight /></p></Link>
        </div>
        <div>
          <img className='w-100' src={heroallpageimg} alt="herotoysimage" />
        </div>
      </div>
    </div>
  );
};

export default Heroallpages;
