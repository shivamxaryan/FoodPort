import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const[logbtn, setlogbtn]=useState("Login");
  const onlineStatus = useOnlineStatus();

  //useContext example
  const {loggedInUser}=useContext(UserContext);
  // console.log({loggedInUser});

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="w-28">
          <img src={LOGO_URL} alt="logo" />
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4">Cart</li>
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
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;