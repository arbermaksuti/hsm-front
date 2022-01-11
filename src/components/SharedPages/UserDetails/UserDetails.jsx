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
    const [userImage, setUserImage] = useState(user.image);
    const [showSpinner, setShowSpinner] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(true)
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [birthday, setBirthday] = useState("2022-02-22")

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
        setInputDisabled(true)
        setTimeout(() => {
            setShowSpinner(false);
            toast.success(`You have successfully update user ${user.name} ${user.surname}`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: "colored", });
        }, 1000);
    }

    let modalContent = (
        <div className="deleteUserModal">
            <h2>Do you really want to delete user: <span>{user.name} {user.surname}</span></h2>
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

    const topInputsData = [
        {
            name: "Name",
            state: name,
            label: <FormattedMessage defaultMessage="Name" id="Name" />,
            noRequired: true,
            disabled: inputDisabled,
            editable: !inputDisabled,
            className: `margin-right ${!inputDisabled ? "focused" : " "}`,
            onChange: (e) => setName(e.target.value)
        },
        {
            name: "Surname",
            state: surname,
            label: <FormattedMessage defaultMessage="Surname" id="Surname" />,
            noRequired: true,
            disabled: inputDisabled,
            editable: !inputDisabled,
            className: `margin-right ${!inputDisabled ? "focused" : " "}`,
            onChange: (e) => setSurname(e.target.value)
        },

    ]

    const middleInputsData = [
        {
            name: "Username",
            state: username,
            label: <FormattedMessage defaultMessage="Username" id="Username" />,
            noRequired: true,
            disabled: inputDisabled,
            editable: !inputDisabled,
            className: `margin-right ${!inputDisabled ? "focused" : " "}`,
            onChange: (e) => setUsername(e.target.value)
        },
        {
            name: "Email",
            state: email,
            label: <FormattedMessage defaultMessage="Email" id="Email" />,
            noRequired: true,
            disabled: inputDisabled,
            editable: !inputDisabled,
            className: `margin-right ${!inputDisabled ? "focused" : " "}`,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            name: "Birthday",
            state: birthday,
            type: "date",
            label: <FormattedMessage defaultMessage="Birthday" id="Birthday" />,
            noRequired: true,
            disabled: inputDisabled,
            // editable: !inputDisabled,
            className: `margin-right ${!inputDisabled ? "focused" : " "}`,
            onChange: (e) => setBirthday(e.target.value)
        }
    ]

    return (
        <>
            <div className="userDetailsP">
                <p className="pageTitle">
                    <FormattedMessage defaultMessage="User Details" id="UserDetails" />
                </p>
                <div className="userDetailsP-Content borderedDiv">
                    <div className="userDetailsP-Content-Top d-flex ai-center jc-space_between">
                        <div className="userDetailsP-Content-Top-Inputs d-flex fd-column jc-space_between">
                            {topInputsData.map((input, index) => (
                                <Input
                                    key={index}
                                    name={input.name}
                                    state={input.state}
                                    type={input.type}
                                    label={input.label}
                                    noRequired={input.noRequired}
                                    disabled={input.disabled}
                                    editable={input.editable}
                                    className={input.className}
                                    onChange={input.onChange}
                                />
                            ))}
                        </div>
                        <label
                            htmlFor="upload"
                            style={{ backgroundImage: `url(${userImage ? userImage : noImage})`, cursor: !inputDisabled && "pointer" }}
                            className={`userDetailsP-Content-Top-ImageInput p-relative d-flex ai-center jc-center ${!user.image && "noImage"}`}
                        >
                            {!inputDisabled && <span><GrCamera /></span>}
                            <Input
                                id="upload"
                                accept="image/png, image/jpeg"
                                type="file"
                                className={`fileInput ${!inputDisabled}`}
                                disabled={inputDisabled}
                                onChange={(e) => {
                                    setUserImage(URL.createObjectURL(e.target.files[0]));
                                }}
                            />
                        </label>
                    </div>

                    <div className="userDetailsP-Content-Middle d-flex ai-center jc-space_between">
                        <div className="userDetailsP-Content-Middle-Inputs d-flex fd-column jc-space_between">
                            {middleInputsData.map((input, index) => (
                                <Input
                                    key={index}
                                    name={input.name}
                                    state={input.state}
                                    type={input.type}
                                    label={input.label}
                                    noRequired={input.noRequired}
                                    disabled={input.disabled}
                                    editable={input.editable}
                                    className={input.className}
                                    onChange={input.onChange}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="userDetailsP-Content-Bottom d-flex ai-center">
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
            <Spinner show={showSpinner} />
        </>
    );
};

export default UserDetails;
