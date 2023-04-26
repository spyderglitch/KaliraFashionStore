import React from "react";

import './footer.scss';
import logo from "../../assets/logo.png";

//MUI imports
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <Link  to="/">
            <img className="logo" src={logo} alt="Company-logo" />
        </Link>
      </div>
      <div className="right">
        <span>Copyright 2023. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer
