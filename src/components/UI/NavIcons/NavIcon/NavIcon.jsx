import React, { useState } from 'react'
import "./NavIcon.scss";
import { Link } from 'react-router-dom';
import { GrUser, GrSettingsOption, GrLogout } from "react-icons/gr";
import { localStorageData } from '../../../../localStorageData';

const NavIcon = ({ type, content, num, icon, userImg }) => {
    const [openDropD, setOpenDropD] = useState(false)

    const closeDropDHandler = () => { openDropD(false) }

    let dropdownContent
    if (content !== undefined && content.length > 0) {
        dropdownContent = content.map((item, index) => (
            <Link to={`/${type}s`} onClick={closeDropDHandler} className="navIcon-content-children d-flex ai-center" key={index} >
                <p className='scrollable'> {type === "message" ? `Message from ${item.from}` : item.text}</p>
            </Link>
        ))
    } else if (content !== undefined && content.length === 0) {
        dropdownContent = (
            <div onClick={closeDropDHandler} className="navIcon-content-children d-flex ai-center no-children">
                You don't have any {type}
            </div>
        )
    } else if (content === undefined) {
        dropdownContent = (
            <>
                <Link to="/profile" onClick={closeDropDHandler} className="navIcon-content-children d-flex ai-center profileAvatar">
                    <GrUser /> Profile
                </Link>
                <Link to="/settings" onClick={closeDropDHandler} className="navIcon-content-children d-flex ai-center profileAvatar">
                    <GrSettingsOption /> Settings
                </Link>
                <Link to="/login" className="navIcon-content-children d-flex ai-center profileAvatar"
                    onClick={() => {
                        closeDropDHandler()
                        localStorageData.userLogout()
                    }}
                >
                    <GrLogout /> Log Out
                </Link>
            </>
        )
    }

    return (
        <div
            style={{ backgroundImage: `url(${userImg})` }}
            onMouseEnter={() => setOpenDropD(true)}
            onMouseLeave={() => setOpenDropD(false)}
            className="navIcon p-relative d-flex ai-center jc-center br-50 c-pointer"
        >
            {icon && icon}
            {num > 0 && (
                <span className="p-absolute d-flex ai-center jc-center br-50">
                    {num}
                </span>
            )}
            <div className={`navIcon-content p-absolute d-flex fd-column r-0  ${openDropD && 'show'}`}>
                {dropdownContent}
            </div>
        </div>
    )
}

export default NavIcon
