import React from 'react'
import "./NavIcons.scss"
import NavIcon from './NavIcon/NavIcon';
import { useSelector } from 'react-redux';
import { GrNotification, GrMailOption, } from "react-icons/gr";

const NavIcons = ({ userImg }) => {
    const newNotif = useSelector((state) => state.notificationsReducer.newNotifications)
    const newMess = useSelector((state) => state.messagesReducer.newMessages)

    return (
        <div className="navIcons d-flex ai-center">
            <NavIcon type="notification" icon={<GrNotification />} num={newNotif.length} content={newNotif} />
            <NavIcon type="message" icon={<GrMailOption />} num={newMess.length} content={newMess} />
            <NavIcon type="user" userImg={userImg} />
        </div>
    )
}

export default NavIcons
