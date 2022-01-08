import React from "react";
import { FormattedMessage } from "react-intl";

const SettingsPage = () => {
    return (
        <div className="settingsP">
            <p className="pageTitle">
                <FormattedMessage defaultMessage="Settings" id="Settings" />
            </p>
        </div>
    );
};

export default SettingsPage;
