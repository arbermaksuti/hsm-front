import React from "react";
import "./UserTypeBox.scss";
import doctorImg from "../../../assets/images/doctor.png";
import patientImg from "../../../assets/images/patient.png";
import { GiCheckMark } from "react-icons/gi";

const UserTypeBox = ({ type, text, onClick, userSelected }) => {
    return (
        <div
            className={`userTypeBox p-relative d-flex fd-column ai-center jc-center t-center c-pointer ${userSelected === text.props.defaultMessage && "checked"
                }`}
            onClick={onClick}
        >
            <img
                src={
                    type === "Doctor" ? doctorImg : type === "Patient" ? patientImg : null
                }
                alt={type}
            />
            <h3>{text}</h3>
            {userSelected === text.props.defaultMessage && (
                <span className="userTypeBox-selected p-absolute d-flex ai-center jc-center br-50">
                    <GiCheckMark />
                </span>
            )}
        </div>
    );
};

export default UserTypeBox;
