import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_LNK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items);
 console.log(cartItems);
  return (
    <div className="flex justify-between items-center bg-rose-400 mb-4 shadow-md rounded-md">
      <div className="logo-container">
        <img className="w-28" src={LOGO_LNK} />
      </div>
      <div className="nav-container">
        <ul className="flex">
          <li className="p-4">
            Online Status : {onlineStatus?"🟢":"🔴"}
          </li>
          <li  className="p-4">
          <Link to="/">Home</Link>
            </li>
          <li className="p-4">
            <Link to="/about">About</Link>
            </li>
          <li  className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
          <button
            className="btn-login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>

          <li className="p-4 font-bold">
           {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
