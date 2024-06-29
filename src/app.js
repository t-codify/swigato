import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * Header
 *  -Logo
 *  -Navbar
 * Body
 *  - Search
 *  - RestaurantContainer
 *    -RestaurantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<AppLayout />);
