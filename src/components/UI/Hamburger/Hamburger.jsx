import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ onClick, openSideB }) => {
    return (
        <div
            onClick={onClick}
            className="hamburgerDiv d-flex fd-column ai-center jc-space_around h-100 c-pointer"
        >
            <button
                className={`hamburger hamburger--collapse ${openSideB && "is-active"}`}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    );
};

export default Hamburger;
