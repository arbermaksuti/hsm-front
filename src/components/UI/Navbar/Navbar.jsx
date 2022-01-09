import React from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import NavIcons from "../NavIcons/NavIcons";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = ({ onClick, sideB, userImg }) => {
    return (
        <div className="navbar p-fixed w-100 t-0 d-flex ai-center jc-space_between">
            <Logo />
            <NavIcons userImg={userImg} />
            <Hamburger onClick={onClick} openSideB={sideB} />
        </div>
    );
};

export default Navbar;
