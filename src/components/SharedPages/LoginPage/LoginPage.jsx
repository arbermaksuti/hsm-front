import React, { useState } from "react";
import "./LoginPage.scss";
import { FormattedMessage } from "react-intl";
import UserTypeBox from "../../UI/UserTypeBox/UserTypeBox";
import Input from "../../UI/Input/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { toast, ToastContainer } from "react-toastify";
import { localStorageData } from "../../../localStorageData";
import Spinner from "../../UI/Spinner/Spinner";
import SelectLanguage from "../../UI/SelectLanguage/SelectLanguage";

const LoginPage = ({ lang, setLang }) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);

    const userCheckHandler = (type) => {
        if (selectedUser !== type) {
            setSelectedUser(type);
        } else {
            setSelectedUser(null);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setShowSpinner(true);
        setTimeout(() => {
            if (
                username.toLowerCase() !== "admin" &&
                password.toLowerCase() !== "admin"
            ) {
                toast.error(
                    <FormattedMessage
                        defaultMessage="To continue fill this inputs with the word: admin!"
                        id="LoginError"
                    />,
                    {
                        autoClose: 2500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        theme: "colored",
                    }
                );
                setShowSpinner(false);
            } else {
                localStorageData.userLogin();
                navigate("/homepage");
            }
        }, 1000);
    };

    return (
        <>
            <div className="loginP w-100 d-flex ai-center jc-center w-100 h-100">
                <div className={`loginP-Content ${selectedUser && "user-checked"}`}>
                    <h2 className="loginP-Title t-center">
                        <FormattedMessage
                            defaultMessage="Choose Account Type"
                            id="LoginP.Title"
                        />
                    </h2>
                    <div className="loginP-Users d-flex ai-center jc-space_around">
                        <UserTypeBox
                            type="Patient"
                            text={<FormattedMessage defaultMessage="Patient" id="Patient" />}
                            userSelected={selectedUser}
                            onClick={() => userCheckHandler("Patient")}
                        />
                        <UserTypeBox
                            type="Doctor"
                            text={<FormattedMessage defaultMessage="Doctor" id="Doctor" />}
                            userSelected={selectedUser}
                            onClick={() => userCheckHandler("Doctor")}
                        />
                    </div>
                    <div className={`loginP-Wrapper ${selectedUser && "user-checked"}`}>
                        <div className="loginP-Form p-relative">
                            <h4 className="t-center">
                                <FormattedMessage
                                    defaultMessage="Hello our dear "
                                    id="LoginP.SubTitle"
                                />
                                {selectedUser !== null && (
                                    <>
                                        {" "}
                                        <FormattedMessage
                                            defaultMessage={`${selectedUser}`}
                                            id={`${selectedUser}`}
                                        />
                                        !
                                    </>
                                )}
                            </h4>
                            <h6 className="t-center">
                                <FormattedMessage
                                    sdefaultMessage="Please fill out the form below to get started!"
                                    id="LoginP.Paragraph"
                                />
                            </h6>
                            <form onSubmit={onSubmitHandler}>
                                <Input
                                    name="Username"
                                    label={
                                        <FormattedMessage defaultMessage="Username" id="Username" />
                                    }
                                    icon={<FiMail />}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Input
                                    name="Password"
                                    type="password"
                                    label={
                                        <FormattedMessage defaultMessage="Password" id="Password" />
                                    }
                                    icon={<FiLock />}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="loginP-Form-Buttons d-flex ai-center jc-space_between">
                                    <Link to="/reset-password">
                                        <FormattedMessage
                                            defaultMessage="Forgot password ?"
                                            id="Forgot"
                                        />
                                    </Link>
                                    <Button
                                        text={
                                            <FormattedMessage defaultMessage="Login" id="Login" />
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="loginP-Footer d-flex ai-center jc-space_between">
                            <div className="loginP-Footer-Left">
                                <p>
                                    <FormattedMessage
                                        defaultMessage="Need Help ?"
                                        id="NeedHelp"
                                    />
                                </p>
                                <Link to="/need-help">
                                    <FormattedMessage
                                        defaultMessage="Contact Us"
                                        id="ContactUs"
                                    />
                                </Link>
                            </div>
                            <div className="loginP-Footer-Right">
                                <p>
                                    <FormattedMessage
                                        defaultMessage="No Account ?"
                                        id="NoAccount"
                                    />
                                </p>
                                <Link to="/sign-up">
                                    <FormattedMessage defaultMessage="Sign Up" id="SignUp" />
                                </Link>
                            </div>
                        </div>
                        <Spinner show={showSpinner} />
                    </div>
                </div>
                <SelectLanguage language={lang} setLanguage={setLang} />
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginPage;
