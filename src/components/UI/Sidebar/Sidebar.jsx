import React, { useState } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
    GrHomeRounded,
    GrNotification,
    GrMailOption,
    GrSettingsOption,
    GrLogout,
} from "react-icons/gr";
import { FiHelpCircle } from "react-icons/fi";
import { ReactComponent as Doctors } from "../../../assets/icons/doctors.svg";
import { ReactComponent as Patients } from "../../../assets/icons/patients.svg";
import { ReactComponent as Admins } from "../../../assets/icons/admins.svg";
import { useSelector } from "react-redux";
import { localStorageData } from "../../../localStorageData";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const SideBItem = ({ link, close, icon, text, num }) => {
    return (
        <NavLink
            to={link || "/homepage"}
            onClick={close}
            className="sidebar-item d-flex ai-center w-100"
        >
            {icon}
            <p>{text}</p>
            {num > 0 && (
                <span className="d-flex ai-center jc-center br-50">{num}</span>
            )}
        </NavLink>
    );
};

const Sidebar = ({ open, close, userImg }, props) => {
    let navigate = useNavigate();
    const newNotif = useSelector(
        (state) => state.notificationsReducer.newNotifications
    );
    const newMess = useSelector((state) => state.messagesReducer.newMessages);
    const [showSpinner, setShowSpinner] = useState(false);
    const sideBItems = [
        {
            text: <FormattedMessage defaultMessage="Homepage" id="Homepage" />,
            link: "/homepage",
            icon: <GrHomeRounded />,
        },
        {
            text: (
                <FormattedMessage defaultMessage="Notifications" id="Notifications" />
            ),
            link: "/notifications",
            icon: <GrNotification />,
            num: newNotif.length,
        },
        {
            text: <FormattedMessage defaultMessage="Messages" id="Messages" />,
            link: "/messages",
            icon: <GrMailOption />,
            num: newMess.length,
        },
        {
            text: <FormattedMessage defaultMessage="Doctors" id="Doctors" />,
            link: "/doctors",
            icon: <Doctors />,
        },
        {
            text: <FormattedMessage defaultMessage="Patients" id="Patients" />,
            link: "/patients",
            icon: <Patients />,
        },
        {
            text: <FormattedMessage defaultMessage="Admins" id="Admins" />,
            link: "/admins",
            icon: <Admins />,
        },
        {
            text: <FormattedMessage defaultMessage="Help" id="Help" />,
            link: "/help",
            icon: <FiHelpCircle />,
        },
    ];

    const logoutHandler = () => {
        setShowSpinner(true);
        setTimeout(() => {
            localStorageData.userLogout();
            navigate("/login");
            setShowSpinner(false);
        }, 500);
    };

    return (
        <>
            <div
                className={`sidebar p-fixed l-0 d-flex fd-column jc-space_between b-0 ${open}`}
            >
                <div>
                    {sideBItems.map((item, index) => (
                        <SideBItem
                            link={item.link}
                            icon={item.icon}
                            text={item.text}
                            num={item.num}
                            close={close}
                            key={index}
                            {...props}
                        />
                    ))}
                </div>
                <div>
                    <div className="sidebar-user">
                        <NavLink
                            to="/profile"
                            onClick={close}
                            className="sidebar-user-user d-flex ai-center"
                        >
                            <div
                                style={{ backgroundImage: `url(${userImg})` }}
                                className="sidebar-user-user-img br-50"
                            />
                            <span className="sidebar-user-user-green-circle" />
                            <div className="sidebar-user-user-name d-flex fd-column">
                                <p>John Deen (Admin)</p>
                                <i>
                                    <FormattedMessage defaultMessage="Online" id="Online" />
                                </i>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/settings"
                            onClick={close}
                            className="sidebar-user-user d-flex ai-center"
                        >
                            <GrSettingsOption />
                            <p>
                                <FormattedMessage defaultMessage="Settings" id="Settings" />
                            </p>
                        </NavLink>
                        <button
                            onClick={logoutHandler}
                            className="sidebar-user-user d-flex ai-center c-pointer"
                        >
                            <GrLogout />
                            <p>
                                <FormattedMessage defaultMessage="Logout" id="Logout" />
                            </p>
                        </button>
                    </div>
                    <p className="textOnBottom">
                        HSM ©{" "}
                        <FormattedMessage
                            defaultMessage="All Right Reserved"
                            id="AllRightReserved"
                        />{" "}
                        by A.M
                    </p>
                </div>
            </div>
            <Spinner show={showSpinner} />
        </>
    );
};

export default Sidebar;
