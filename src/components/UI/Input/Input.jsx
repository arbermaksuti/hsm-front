import React, { useState } from "react";
import "./Input.scss";
import { GrEdit } from "react-icons/gr"

const Input = ({
    id,
    textarea,
    name,
    type,
    label,
    maxLength,
    noRequired,
    disabled,
    accept,
    icon,
    editable,
    onChange,
    state,
    setState,
    className,
}) => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = (e, values) => {
        if (e.target.value === "" || (e.target.value !== "" && e.target.value === values)) {
            setFocused(false);
        } else setFocused(true);
    };

    return (
        <div
            className={`inputPure p-relative d-flex ai-center ${focused ? "focused" : ""
                } ${className && className}`}
        >
            <span className="p-absolute d-flex ai-center jc-center">{label}</span>
            {icon}{" "}
            {textarea ? (
                <textarea name={name} />
            ) : (
                <input
                    id={id}
                    value={state}
                    name={name}
                    type={type ? type : "text"}
                    maxLength={maxLength}
                    required={noRequired ? false : true}
                    onFocus={onFocus}
                    onBlur={(e) => onBlur(e, state)}
                    accept={accept}
                    onChange={
                        setState
                            ? (e) => {
                                setState(e.target.value);
                            }
                            : onChange
                    }
                    disabled={disabled ? true : false}
                />
            )}
            {editable && <i><GrEdit /></i>}
            {!noRequired && <i style={{ color: "red", fontSize: "22px" }}>*</i>}
        </div>
    );
};

export default Input;
