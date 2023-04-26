import React from "react";
import { Outlet } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./navigation.styles.scss";

//MUI imports
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useNavigate} from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/shop">Shop your &hearts; Saree</Link>
          </div>
        </div>
        
        <div className="center">
        <div onClick={()=>{navigate('/')}}>
            <img src={logo} alt="Company-logo" className="logo" />
            </div>
        </div>
        <div className="right">
          <SearchIcon className="item"/>
          <PersonOutlineIcon className="item"/>
          <FavoriteBorderIcon className="item" />
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon className="item" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;