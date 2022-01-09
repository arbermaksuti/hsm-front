import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Logo = () => {
    return (
        <Link to="/homepage" className="logo d-flex ai-center">
            <img src={logo} alt={logo} />
            <h3 className="titleOnlyOnMobile">HSM </h3>
            <span />
            <h3>Hospital Management System</h3>
        </Link>
    );
};

export default Logo;
