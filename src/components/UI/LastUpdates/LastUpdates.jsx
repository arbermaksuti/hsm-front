import React from "react";
import "./LastUpdates.scss";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const LastUpdates = () => {
    const lastUpdatesData = [
        {
            name: "Mike Wilson",
            type: "New Patient",
            time: "25/12/2021-15:52",
            from: "John Deen",
            update: "Added",
        },
        {
            name: "Mike Tyson",
            type: "New Doctor",
            time: "25/12/2021-15:55",
            from: "John Deen",
            update: "Added",
        },
        {
            name: "Mike Tyson",
            type: "New Doctor",
            time: "25/12/2021-15:55",
            from: "John Deen",
            update: "Added",
        },
    ];

    return (
        <div className="lastUpdates borderedDiv d-flex fd-column jc-space_between">
            <h3>
                <FormattedMessage
                    defaultMessage="Last 5 updates on system"
                    id="LastUpdates"
                />
            </h3>
            <div className="lastUpdates-Content">
                {lastUpdatesData.map((i, index) => {
                    return (
                        <p key={index}>
                            <span>
                                <FormattedMessage defaultMessage="User" id="User" />{" "}
                                <Link to={`/${i.name.replace(/ /g, "")}`} className="name">
                                    {" "}
                                    {i.name}{" "}
                                </Link>
                            </span>{" "}
                            <span>
                                <FormattedMessage defaultMessage="has been" id="HasBeen" />{" "}
                                <FormattedMessage defaultMessage={i.update} id={i.update} />
                            </span>
                            <span>
                                {i.type && (
                                    <>
                                        {" "}
                                        as <span className="type">{i.type}</span>
                                    </>
                                )}
                            </span>{" "}
                            <span>
                                <FormattedMessage defaultMessage="at" id="At" />: {i.time}
                            </span>{" "}
                            <span>
                                <FormattedMessage defaultMessage="from" id="From" />
                                <Link to={`/${i.from.replace(/ /g, "")}`} className="from">
                                    {" "}
                                    {i.from} Admin
                                </Link>
                            </span>
                        </p>
                    );
                })}
            </div>
            <Button
                link
                to="/all-updates"
                text={
                    <FormattedMessage
                        defaultMessage="View All Updates"
                        id="ViewAllUpdates"
                    />
                }
                className="blueLight"
            />
        </div>
    );
};

export default LastUpdates;
