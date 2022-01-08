import React from 'react'
import "./MessagesPage.scss"
import { FormattedMessage } from 'react-intl'
import Button from "../../UI/Button/Button"
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/index'

const MessagesPage = () => {
    const dispatch = useDispatch();
    const newMess = useSelector((state) => state.messagesReducer.newMessages)
    const removeNewMess = (messageID) => dispatch(actions.removeNewMessage(messageID))

    const onReplyMessageHandler = (id, from) => {
        toast.success(`You have successfully responded to the message sent by ${from ? from : "User"}`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: 'colored', })
    }
    const onViewMessageHandler = (id, from) => {
        removeNewMess(id)
        toast.success(`You have successfully set as viewed message sent by ${from ? from : "User"}`, { autoClose: 2500, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: 'colored', })
    }

    return (
        <>
            <div className="messagesP">
                <p className="pageTitle">
                    <FormattedMessage defaultMessage="Messages" id="Messages" />
                </p>
                {newMess.length > 0 &&
                    <div className="messagesP-newMessages borderedDiv">
                        <h3>New Messages</h3>
                        <div className="messagesP-Content">
                            {newMess.map((i) => {
                                return (
                                    <div className="messagesP-OneMessage d-flex ai-center jc-space_between" key={i.id}>
                                        <div className="messagesP-TextWrapper">
                                            <span>Message from: <span className="from">{i.from} - {i.userType}</span></span>
                                            <p className="scrollable">{i.text}</p>
                                        </div>
                                        <div className="messagesP-Buttons">
                                            <Button onClick={() => onReplyMessageHandler(i.id, i.from)} text={<FormattedMessage defaultMessage="Reply" id="Reply" />} className="blueLight larger" />
                                            <Button onClick={() => onViewMessageHandler(i.id, i.from)} text={<FormattedMessage defaultMessage="Clear" id="Clear" />} className="blueDark larger" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default MessagesPage
