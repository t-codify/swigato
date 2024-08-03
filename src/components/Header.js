import { Link } from "react-router-dom";
import { LOGO_URL } from "../util/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../util/customHooks/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //const onlineStatus, setOnlineStatus] = useState(false);
  //if no dependency array => useEffect is called on every render
  //empty dependency array=> called only initial render
  //something as dependency => called only when dependency changes
  useEffect(() => {
    console.log("use Effect called");
  }, [btnName]);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="align-middle">
        <ul className="flex m-4 p-4">
          <li className="px-2 my-2">
            Online: {useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li className="px-2 my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 my-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 my-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 my-2 font-bold">
            <Link to="/Cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-2 ">
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-4"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
