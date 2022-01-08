import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import AddNewUser from '../../UI/AddNewUser/AddNewUser'
import UsersTable from '../../UI/UsersTable/UsersTable'

const Admin_PatientsPage = () => {
    const intl = useIntl()

    return (
        <div className='patientsP'>
            <p className='pageTitle'>
                <FormattedMessage defaultMessage="Patients" id="Patients" />
            </p>
            <AddNewUser inputsData={[{ type: intl.formatMessage({ id: 'Patient' }) }]} />
            <UsersTable usersType="patients" />
        </div>
    )
}

export default Admin_PatientsPage
