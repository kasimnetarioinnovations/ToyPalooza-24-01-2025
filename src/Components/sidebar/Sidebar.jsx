import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul className="listdiv">
          <li className="menu-items active">
            <Link className="menu-itemslink" to="/profile">Account details</Link>
          </li>
         
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/order-history">Order History</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/whislist">Whislist</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/address-book">Address Book</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/recent-activity">Recent Activity</Link>
          </li>
          
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/support-and-help">Support & Help</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/order-tracking">Order Tracking</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/reviewspage">Reviews & Ratings</Link>
          </li>
          <li className="menu-items ">
            <Link className="menu-itemslink" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
