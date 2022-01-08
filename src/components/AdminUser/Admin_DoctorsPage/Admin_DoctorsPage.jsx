import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import AddNewUser from "../../UI/AddNewUser/AddNewUser"
import UsersTable from "../../UI/UsersTable/UsersTable"

const Admin_DoctorsPage = () => {
    const intl = useIntl()

    return (
        <div className='doctorsP'>
            <p className='pageTitle'>
                <FormattedMessage defaultMessage="Doctors" id="Doctors" />
            </p>
            <AddNewUser inputsData={[{ type: intl.formatMessage({ id: 'Doctor' }) }]} />
            <UsersTable usersType="doctors" />
        </div>
    )
}

export default Admin_DoctorsPage
