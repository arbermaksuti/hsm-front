import React from 'react'
import "./NotificationsPage.scss"
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../../store/actions/index"
import Button from "../../UI/Button/Button"
import { toast, ToastContainer } from 'react-toastify'

const NotificationsPage = () => {
    const dispatch = useDispatch();
    const newNotif = useSelector((state) => state.notificationsReducer.newNotifications)
    const removeNewNotif = (notificationID) => dispatch(actions.removeNewNotification(notificationID))

    const onClearNotificationHandler = (id, from) => {
        removeNewNotif(id)
        toast.success(`You have successfully clear this notification`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: 'colored', })
    }
    return (
        <>
            <div className="notificationsP">
                <p className="pageTitle">
                    <FormattedMessage defaultMessage="Notifications" id="Notifications" />
                </p>

                {newNotif.length > 0 && (
                    <div className="notificationsP-newNotifications borderedDiv">
                        <h3>New Notifications</h3>
                        <div className="notificationsP-Content">
                            {newNotif.map((i) => {
                                return (
                                    <div className="notificationsP-OneMessage d-flex ai-center jc-space_between" key={i.id}>
                                        <div className="notificationsP-TextWrapper">
                                            {/* <span>Message from: <span className="from">{i.from} - {i.userType}</span></span> */}
                                            <p className="scrollable">{i.text}</p>
                                        </div>
                                        <div className="notificationsP-Buttons d-flex ai-center">
                                            <Button
                                                text={<FormattedMessage defaultMessage="View" id="View" />} className="blueLight larger" />
                                            <Button onClick={() => onClearNotificationHandler(i.id)} text={<FormattedMessage defaultMessage="Clear" id="Clear" />} className="blueDark larger" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)}
            </div >
            <ToastContainer />
        </>
    )
}

export default NotificationsPage
