import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
    return (
        <div className={`spinner ${props.show}`} style={{ transition: `all ${props.transition}` }}>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
