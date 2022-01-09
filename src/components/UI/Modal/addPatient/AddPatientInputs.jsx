import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Input from "../../Input/Input";

const AddPatientInputs = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const inputsData = [
        {
            name: "Name",
            state: name,
            setState: setName,
            label: <FormattedMessage id="Name" defaultMessage="Name" />,
        },
        {
            name: "Surname",
            state: surname,
            setState: setSurname,
            label: <FormattedMessage id="Surname" defaultMessage="Surname" />,
        },
    ];
    return (
        <>
            {inputsData.map((input, index) => (
                <Input {...input} key={index} />
            ))}
        </>
    );
};

export default AddPatientInputs;
