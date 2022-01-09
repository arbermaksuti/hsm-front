import React, { useState } from "react";
import "./Content.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import userImg from "../../../assets/images/user.jpg";
import { ToastContainer } from "react-toastify";

const Content = ({ children }) => {
    const dispatch = useDispatch();
    const hideModal = () => dispatch(actions.hideModal());
    const modal = useSelector((state) => state.modalReducer.modal);
    const [showMobileSideB, setShowMobileSideB] = useState(false);

    const sideBHandler = () => {
        setShowMobileSideB(!showMobileSideB);
    };
    const closeSideBHandler = () => {
        setShowMobileSideB(false);
        if (modal) {
            hideModal();
        }
    };

    return (
        <>
            <div className="content">
                <Navbar
                    onClick={sideBHandler}
                    sideB={showMobileSideB}
                    userImg={userImg}
                />
                <Sidebar
                    open={showMobileSideB}
                    close={closeSideBHandler}
                    userImg={userImg}
                />
                <Backdrop show={showMobileSideB} hide={closeSideBHandler} />
                <div className="content-children scrollable p-fixed b-0">
                    {children}
                    <Modal />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Content;
