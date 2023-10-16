import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const[logbtn, setlogbtn]=useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>

        <div className="nav-items">
          <ul>
            <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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