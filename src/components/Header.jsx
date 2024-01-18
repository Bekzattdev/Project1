import React from "react";
import image from "../image/image 2.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={image} alt="" />
          <nav>
            <Link to="/menu">
              <a href="#">Menu</a>
            </Link>
            <a href="/orders">Orders</a>
            <a href="/admin">Admin</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
