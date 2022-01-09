import React from 'react'
import "./ProfilePage.scss"
import { FormattedMessage } from 'react-intl'

const ProfilePage = () => {
    return (
        <div className="profileP">
            <p className="pageTitle">
                <FormattedMessage defaultMessage="Profile" id="Profile" />
            </p>
        </div>
    )
}

export default ProfilePage
