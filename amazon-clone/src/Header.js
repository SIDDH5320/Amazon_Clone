import React from "react";
import "./header.css";
import {
  Search as SearchIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" className="header_logo" src="./Amazonn-Logo.png" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
      <Link to={!user && '/login'}>
      <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionlineone">Hello Guest</span>
            <span className="header_optionlinetwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />
            <span className="header_optionlinetwo header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
