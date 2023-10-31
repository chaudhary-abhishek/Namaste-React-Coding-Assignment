import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_LNK } from "../utils/constants";


const Header = () => {
  let [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LNK} />
      </div>
      <div className="nav-container">
        <ul>
          <li>
          <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;