import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from '../src/Components/ScrollToTop/ScrollToTop';
import Home from '../src/Pages/Home'
import Toys from '../src/Pages/Toys/Toys' ;
import Stationary from './Pages/Stationary/Stationary';
import AddToCart from '../src/Components/AddToCart/AddToCart';
import RefreshPage from '../src/Pages/RefreshPage/Refreshpage';
import Register from '../src/Components/Register/Register';
import Login from '../src/Components/Login/Login';
import Loginhome from '../src/Components/Loginhome/Loginhome';
import HairAccessories from './Pages/HairAccessories/HairAccessories';
import Whislist from './Pages/Whishlist/Whislist';
import Address_book from './Pages/Address_book/Address_book';
import AccountsDetails from './Pages/AccountsDetails/AccountsDetails';
import HelpSupport from './Pages/HelpSupport/HelpSupport';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import Policy from '../src/Pages/Policy/Policy';
import FAQ from '../src/Pages/FAQ/Faq'
import PageRouter from './PageRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
   {/* <BrowserRouter> 
   <ScrollToTop/>
      <Routes> 
        <Route path="/" element={<App />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/toys" element={<Toys />} /> 
        <Route path="/stationary" element={<Stationary />} /> 
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/hairpage" element={<HairAccessories />} /> 
        <Route path="*" element={<RefreshPage/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/loginhome' element={<Loginhome/>} />
        <Route path='/whislist' element={<Whislist/>} />
        <Route path='/address_book' element={<Address_book/>} />
        <Route path='/account_details' element={<AccountsDetails/>} />
        <Route path='/help_support' element={<HelpSupport/>} />
        <Route path='/order_history' element={<OrderHistory/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/faq' element={<FAQ/>} />
      </Routes>
    </BrowserRouter> */}
    <PageRouter/>
  </React.StrictMode>
  </React.StrictMode>
);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from "react-redux";
// // import { store } from "./stores";
// import PageRouter from "./PageRouter";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <PageRouter />
//    </React.StrictMode>
// );
