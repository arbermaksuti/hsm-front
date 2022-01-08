import React from 'react'
import "./HelpPage.scss"
import { FormattedMessage } from 'react-intl'

const HelpPage = () => {
    return (
        <div className='helpP'>
            <p className='pageTitle'>
                <FormattedMessage defaultMessage="Help" id="Help" />
            </p>
        </div>
    )
}

export default HelpPage
