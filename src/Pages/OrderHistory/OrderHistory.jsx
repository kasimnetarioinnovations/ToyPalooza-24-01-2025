import React from 'react';
import '../OrderHistory/OrderHistory.css';
import Heroallpages2 from '../../Components/Heroallpages2/Heroallpages2';
import { Link } from 'react-router-dom';

const OrderHistory = () => {

    return (
        <div>
        <Heroallpages2 profile_nav="Order History"/>
          <div className="whishlit-sidebar section-padding pt-0">
           <div className='whishlit-sidebar-container bg-white d-flex justify-content-evenly ' style={{padding:"20px 30px"}}>
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
           <div className="righttwhishlist-product-card  orderhistory-bx d-flex gap-5">
           <div className="container-fluid">
                <div className="row align-items-center">
                        <div className='sidebarorderdiv'>
                            
                            <div className='orderdetaildiv'>
                                <table className='ordertable'>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Order no.</th>
                                        <th>Order Total</th>
                                        <th>Item</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td className='sno'>1.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatusprocess">Processing</span></td>
                                        <td>TX4824-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>
                                    <tr>
                                        <td className='sno'>2.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatusdelivered">Delivered</span></td>
                                        <td>TX4823-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>
                                    <tr>
                                        <td className='sno'>3.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatusdelivered">Delivered</span></td>
                                        <td>TX4824-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>
                                    <tr>
                                        <td className='sno'>4.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatusdelivered">Delivered</span></td>
                                        <td>TX4824-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>
                                    <tr>
                                        <td className='sno'>5.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatustransit">In transit</span></td>
                                        <td>TX4824-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>
                                    <tr>
                                        <td className='sno'>6.</td>
                                        <td>12 Jan, 2025</td>
                                        <td class="status-cell">
                                        <span class="status-badge actionstatusdelivered">Delivered</span></td>
                                        <td>TX4824-WR19</td>
                                        <td>₹200</td>
                                        <td>4</td>
                                        <td className='actionview'>View</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
            </div>
           </div>
           </div>
          </div>
        </div>
    )
}

export default OrderHistory;
