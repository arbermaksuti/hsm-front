import React, { useState } from "react";
import "./UserDetails.scss";
import { FormattedMessage } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";
import { allUsersData } from "../../UI/UsersTable/allUsersData";
import Input from "../../UI/Input/Input";
import noImage from "../../../assets/images/noImage.jpg";
import { GrCamera } from "react-icons/gr";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import { toast } from "react-toastify";
import Spinner from "../../UI/Spinner/Spinner";

const UserDetails = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation().pathname;
    const hideModal = () => dispatch(actions.hideModal());
    const showModal = (modalContent) => dispatch(actions.showModal("", modalContent));
    const user = allUsersData.find((user) => user.username === location.slice(14));
    const [userImage] = useState(user.image ? user.image : noImage);
    const [showSpinner, setShowSpinner] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(true)
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)

    const onUserDeleteHandler = () => {
        setShowSpinner(true);
        setTimeout(() => {
            hideModal();
            setShowSpinner(false);
            navigate(`/${user.role.toLowerCase()}s`);
        }, 1000);
        setTimeout(() => {
            toast.success(`You have successfully delete user ${user.name} ${user.surname}}`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: "colored", });
        }, 1100);
    };

    const onSaveHandler = () => {
        setShowSpinner(true);
        setTimeout(() => {
            setInputDisabled(true)
            setShowSpinner(false);
            toast.success(`You have successfully update user ${user.name} ${user.surname}`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: "colored", });
        }, 1000);
    }

    let modalContent = (
        <div className="deleteUserModal">
            <h2>
                Do you really want to delete user:{" "}
                <span>
                    {user.name} {user.surname}
                </span>
            </h2>
            <p>If you delete users, you can not revert this action!</p>
            <div className="deleteUserModal-Buttons d-flex ai-center">
                <Button
                    onClick={hideModal}
                    text={<FormattedMessage defaultMessage="Discard" id="Discard" />}
                    className="blueLight larger"
                />
                <Button
                    onClick={onUserDeleteHandler}
                    text={<FormattedMessage defaultMessage="Delete" id="Delete" />}
                    className="red larger"
                />
            </div>
        </div>
    );

    return (
        <>
            <div className="userDetailsP">
                <p className="pageTitle">
                    <FormattedMessage defaultMessage="User Details" id="UserDetails" />
                </p>
                <div className="userDetailsP-Content">
                    <div className="userDetailsP-user borderedDiv">
                        <div className="userDetailsP-user-top d-flex ai-center jc-space_between">
                            <div className="d-flex ai-center">
                                <Input
                                    name="Name"
                                    state={name}
                                    label={<FormattedMessage defaultMessage="Name" id="Name" />}
                                    noRequired
                                    disabled={inputDisabled}
                                    className={`margin-right ${!inputDisabled ? "focused" : ""}`}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                    name="Surname"
                                    state={surname}
                                    label={
                                        <FormattedMessage defaultMessage="Surname" id="Surname" />
                                    }
                                    noRequired
                                    disabled={inputDisabled}
                                    className={`${!inputDisabled ? "focused" : ""}`}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                            <div
                                style={{ backgroundImage: `url(${userImage})`, cursor: !inputDisabled && "pointer" }}
                                className={`image-input p-relative d-flex ai-center jc-center ${!user.image && "noImage"
                                    } `}
                            >{!inputDisabled &&
                                <span>
                                    <GrCamera />
                                </span>
                                }
                                <Input
                                    accept="image/png, image/jpeg"
                                    type="file"
                                    className={`fileInput ${!inputDisabled}`}
                                    disabled={inputDisabled}
                                // onChange={(e) => {
                                //     setUserImage(e.target.value);
                                // }}
                                />
                            </div>
                        </div>
                        <div className="userDetailsP-user-bottom d-flex ai-center">
                            {inputDisabled ?
                                <Button
                                    onClick={() => setInputDisabled(false)}
                                    text={<FormattedMessage defaultMessage="Edit" id="Edit" />}
                                    className="blueLight larger"
                                /> :
                                <Button
                                    onClick={onSaveHandler}
                                    text={<FormattedMessage defaultMessage="Save" id="Save" />}
                                    className="green larger"
                                />}
                            <Button
                                onClick={() => showModal(modalContent)}
                                text={<FormattedMessage defaultMessage="Delete" id="Delete" />}
                                className="red larger"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Spinner show={showSpinner} />
        </>
    );
};

export default UserDetails;
