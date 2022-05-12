import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">

        <div className="left">
          <span className="lang">EN</span>
          <div className="search">
            <input type="text" placeholder="Serch" className="input" />
            <SearchOutlinedIcon className="search-img" />
          </div>
        </div>

        <div className="center">
          <div className="logo">LAMA</div>
        </div>

        <div className="right">
          <div className="register">Register</div>
          <div className="signin">Sign In</div>
          <div className="cart-content">
            <Badge badgeContent={4} color="primary" className="badge">
             <ShoppingCartOutlinedIcon className="cart-icon"/>
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
