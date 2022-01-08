import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import AddNewUser from '../../UI/AddNewUser/AddNewUser'
import UsersTable from '../../UI/UsersTable/UsersTable'

const Admin_AdminsPage = () => {
    const intl = useIntl()

    return (
        <div className='adminsP'>
            <p className='pageTitle'>
                <FormattedMessage defaultMessage="Admins" id="Admins" />
            </p>
            <AddNewUser inputsData={[{ type: intl.formatMessage({ id: 'Admin' }) }]} />
            <UsersTable usersType="admins" />
        </div>
    )
}

export default Admin_AdminsPage
