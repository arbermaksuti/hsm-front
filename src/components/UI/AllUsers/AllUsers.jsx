import React from 'react'
import "./AllUsers.scss"
import { FormattedMessage } from 'react-intl';
import Button from '../Button/Button';

const AllUsers = () => {
    return (
        <div className='allUsers borderedDiv'>
            <h3><FormattedMessage defaultMessage="All users on system" id="AllUsers" /></h3>
            <div className="allUsers-Content">
                <div className='allUsers-Div d-flex ai-center jc-space_between'>
                    <p>
                        <FormattedMessage defaultMessage="On our system currently are " id="OnSystemAre" />
                        <span>92 <FormattedMessage defaultMessage="Patients" id="Patients" /></span>
                    </p>
                    <Button link to="/patients" text={<FormattedMessage defaultMessage="View All Patients" id="ViewAllPatients" />} className="blueLight" />
                </div>
                <div className='allUsers-Div d-flex ai-center jc-space_between'>
                    <p><FormattedMessage defaultMessage="On our system currently are " id="OnSystemAre" />
                        <span>13 <FormattedMessage defaultMessage="Doctors" id="Doctors" /></span>
                    </p>
                    <Button link to="/doctors" text={<FormattedMessage defaultMessage="View All Doctors" id="ViewAllDoctors" />} className="blueLight" />
                </div>
                <div className='allUsers-Div d-flex ai-center jc-space_between'>
                    <p>
                        <FormattedMessage defaultMessage="On our system currently are " id="OnSystemAre" />
                        <span>2 <FormattedMessage defaultMessage="Admins" id="Admins" /></span>
                    </p>
                    <Button link to="/admins" text={<FormattedMessage defaultMessage="View All Admins" id="ViewAllAdmins" />} className="blueLight" />
                </div>
            </div>
        </div>
    )
}

export default AllUsers
