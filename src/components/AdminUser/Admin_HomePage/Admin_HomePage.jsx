import React from "react";
import "./Admin_HomePage.scss";
import { FormattedMessage, useIntl } from "react-intl";
import AddNewUser from "../../UI/AddNewUser/AddNewUser";
import LastUpdates from "../../UI/LastUpdates/LastUpdates";
import AllUsers from "../../UI/AllUsers/AllUsers";

const Admin_HomePage = () => {
    const intl = useIntl();

    return (
        <div className="admin_homeP">
            <p className="pageTitle">
                <FormattedMessage defaultMessage="Homepage" id="Homepage" />
            </p>
            <AddNewUser
                inputsData={[
                    { id: 1, type: intl.formatMessage({ id: "Patient" }) },
                    { id: 2, type: intl.formatMessage({ id: "Doctor" }) },
                    { id: 3, type: intl.formatMessage({ id: "Admin" }) },
                ]}
            />
            <LastUpdates />
            <AllUsers usersType="allusers" />
        </div>
    );
};

export default Admin_HomePage;
