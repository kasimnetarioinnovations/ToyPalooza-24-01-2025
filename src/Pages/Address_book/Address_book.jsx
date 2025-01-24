import React from 'react';
import Heroallpages2 from '../../Components/Heroallpages2/Heroallpages2';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import '../../Pages/Address_book/Address_book.css'

const Address_book = () => {
    
  return (
    <div>
      <Heroallpages2 profile_nav="Address Book"/>
      <div className="whishlit-sidebar section-padding pt-0">
           <div className='whishlit-sidebar-container bg-white d-flex justify-content-evenly align-items-center' style={{padding:"20px 30px"}}>
           <div className="leftwhishlist-sideb">
            <ul className='list-unstyled text-black'>
               <Link to="/account_details" style={{color:"black", fontWeight:"bold"}}><li>Account details</li></Link> 
                <Link to="/order_history" style={{color:"black", fontWeight:"bold"}}><li>Orders History</li></Link>
                <Link to="/whislist" style={{color:"black", fontWeight:"bold"}}><li>Wishlist</li></Link>
                <Link to="/address_book" style={{color:"black", fontWeight:"bold"}}><li>Address book</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Recent Activity</li></Link>
                <Link to="/help_support" style={{color:"black", fontWeight:"bold"}}><li>Support & Help</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Order Tracking</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}><li>Reviews & Ratings</li></Link>
                <Link style={{color:"black", fontWeight:"bold"}}> <li>Logout</li></Link>
            </ul>
           </div>
           <div className="righttwhishlist-product-card d-flex gap-5">
         
         <div >
         <div className='text-center mb-4' ><button className='addnewlocation_btn' style={{backgroundColor:"black", color:"white", border:"none", padding:"10px 120px", borderRadius:"10px" }}>+ Add new location</button></div>
         <div>
         <div className='d-flex flex-row gap-2 py-4'>
            <button style={{backgroundColor:"black", color:"white", border:"none", borderRadius:"2px", padding:"4px 10px", borderRadius:"5px"}}><FaCheck /> Home</button>
            <button style={{backgroundColor:"grey", color:"white", border:"none", borderRadius:"2px",  padding:"4px 10px", borderRadius:"5px"}}>Business</button>
          </div>
            <div className='d-flex flex-column gap-4'>
                <div className='addressbook_Card' style={{display:"flex", gap:"3rem"}}>
                    <div style={{backgroundColor:"#EBEAEE", maxWidth:"371px", borderRadius:"10px", padding:"20px 10px"}}>
                        <div className='text-center'><input type="radio" /></div>
                        <div>
                            <div>
                                <p>Default</p>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <div className='text-end d-flex flex-row justify-content-end gap-2'>
                                <button style={{color:"#6941C6", backgroundColor:"#dcd9d9", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Edit</button>
                                <button style={{color:"#B42318", backgroundColor:"#FEF3F2", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#EBEAEE", maxWidth:"371px", borderRadius:"10px", padding:"20px 10px"}}>
                    <div className='text-center'><input type="radio" /></div>
                        <div>
                            <div>
                                <p>1</p>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <div className='text-end d-flex flex-row justify-content-end gap-2'>
                                <button style={{color:"#6941C6", backgroundColor:"#dcd9d9", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Edit</button>
                                <button style={{color:"#B42318", backgroundColor:"#FEF3F2", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#EBEAEE", maxWidth:"371px", borderRadius:"10px", padding:"20px 10px"}}>
                <div className='text-center'><input type="radio" /></div>
                        <div>
                            <div>
                                <p>2</p>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <div className='text-end d-flex flex-row justify-content-end gap-2'>
                                <button style={{color:"#6941C6", backgroundColor:"#dcd9d9", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Edit</button>
                                <button style={{color:"#B42318", backgroundColor:"#FEF3F2", border:"none", padding:"6px 6px", borderRadius:"5px"}}>Delete</button>
                            </div>
                        </div>
                </div>
                </div>
              
            </div>
         </div>

         </div>
           </div>
           </div>
           
          </div>

    </div>
    
  );
}

export default Address_book;
