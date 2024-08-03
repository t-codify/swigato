import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appReduxStore from "./util/appReduxStore";
import Cart from "./components/Cart";

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
    <Provider store={appReduxStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<RouterProvider router={appRouter} />);
