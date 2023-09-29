import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const[logbtn, setlogbtn]=useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li
              className="login-btn"
              onClick={()=>{
                logbtn === "Login"
                  ? setlogbtn("LogOut")
                  : setlogbtn("Login")
              }}
            >
              {logbtn}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;