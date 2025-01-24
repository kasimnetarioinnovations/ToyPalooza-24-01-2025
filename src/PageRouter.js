import React, { useState } from "react";
// Navbar Before Login
import Navbar from "../src/Components/Navbar/Navbar";
// import Navbar from "./Components/Navbarr2/Navbarr";
// Navbar After Login
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stationary from "./Pages/Stationary/Stationary";
import AddToCart from "./Components/AddToCart/AddToCart";
import Home from "./Pages/Home";
import Toys from "./Pages/Toys/Toys";
import Footer from "./Components/Footer/Footer";
import HairAccessories from "./Pages/HairAccessories/HairAccessories";
import Refreshpage from "./Pages/RefreshPage/Refreshpage";
import Whislist from "./Pages/Whishlist/Whislist";
import Address_book from "./Pages/Address_book/Address_book";
import AccountsDetails from "./Pages/AccountsDetails/AccountsDetails";
import HelpSupport from "./Pages/HelpSupport/HelpSupport";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Policy from "./Pages/Policy/Policy";
import FAQ from "./Pages/FAQ/Faq"

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />

          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/toys",
      element: (
        <>
          <Navbar />
          <Toys />
          <Footer />
        </>
      ),
    },
    {
      path: "/stationary",
      element: (
        <>
          <Navbar />
          <Stationary />
          <Footer />
        </>
      ),
    },
    {
      path: "/addtocart",
      element: (
        <>
          {" "}
          <Navbar />
          <AddToCart />
          <Footer />
        </>
      ),
    },
    {
      path: "/hairpage",
      element: (
        <>
          {" "}
          <Navbar />
          <HairAccessories/>
          <Footer />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          {" "}
          <Navbar />
          <Refreshpage/>
          <Footer />
        </>
      ),
    },
    {
      path: "/whislist",
      element: (
        <>
          {" "}
          <Navbar />
          <Whislist/>
          <Footer />
        </>
      ),
    },
    {
      path: "/address_book",
      element: (
        <>
          {" "}
          <Navbar />
          <Address_book/>
          <Footer />
        </>
      ),
    },
    {
      path: "/account_details",
      element: (
        <>
          {" "}
          <Navbar />
          <AccountsDetails/>
          <Footer />
        </>
      ),
    },
    {
      path: "/help_support",
      element: (
        <>
          {" "}
          <Navbar />
          <HelpSupport/>
          <Footer />
        </>
      ),
    },
    {
      path: "/order_history",
      element: (
        <>
          {" "}
          <Navbar />
          <OrderHistory/>
          <Footer />
        </>
      ),
    },
    {
      path: "/policy",
      element: (
        <>
          {" "}
          <Navbar />
          <Policy/>
          <Footer />
        </>
      ),
    },
    {
      path: "/faq",
      element: (
        <>
          <Navbar />
          <FAQ/>
          <Footer />
        </>
      ),
    },
  
  ]);
  return (
    <>
      <Auth0Provider
        domain="dev-fl1of3jkpiat3tta.us.auth0.com"
        clientId="sa6G0kkqNTfBLWc0HBVx5UHtokhFw0gL"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </>
  );
};

export default PageRouter;
