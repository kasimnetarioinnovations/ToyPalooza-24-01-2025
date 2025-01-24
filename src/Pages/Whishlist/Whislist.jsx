import React from 'react';
import "../../Pages/Whishlist/Whishlist.css"
// import Card from '../../Components/Card/Card';
import Whishlist_Card from './Whishlist_Card';
import Data from "../../Productdata.json"
import Heroallpages2 from '../../Components/Heroallpages2/Heroallpages2';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Whislist = () => {
  const { logout } =
    useAuth0();
    return(
    <div>
        <Heroallpages2 profile_nav="Whishlist"/>
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
             <Link style={{color:"black", fontWeight:"bold"}}> <button
          type="button"
          className="login-btn"
          style={{
            backgroundColor: "transparent",
            color: "#676969",
          }}
          // onClick={handleShowModal}
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Logout
        </button></Link>
            </ul>
           </div>
           <div className="righttwhishlist-product-card d-flex gap-5">
           {Data.Whislist.map((product, index) => (
         <Whishlist_Card
        key={index} // Unique key for React
        title={product.title}
        subtitle={product.subtitle}
        oldPrice={product.old_price}
        newPrice={product.new_price}
        levelRange={product.level_range}
        imageUrl={product.image_url}
    
       />
      ))}
           </div>
           </div>
          </div>
    </div>
    )

}

export default Whislist;

