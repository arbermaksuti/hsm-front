import React, { useState } from "react";
import "./Input.scss";

const Input = ({
    textarea,
    name,
    type,
    label,
    maxLength,
    noRequired,
    disabled,
    accept,
    icon,
    onChange,
    state,
    setState,
    className,
}) => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = (e) => {
        if (e.target.value === "") {
            setFocused(false);
        } else setFocused(true);
    };

    return (
        <div
            className={`inputPure p-relative d-flex ai-center ${focused ? "focused" : "false"
                } ${className && className}`}
        >
            <span className="p-absolute d-flex ai-center jc-center">{label}</span>
            {icon}{" "}
            {textarea ? (
                <textarea name={name} />
            ) : (
                <input
                    value={state}
                    name={name}
                    type={type ? type : "text"}
                    maxLength={maxLength}
                    required={noRequired ? false : true}
                    onFocus={onFocus}
                    onBlur={onBlur}
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
            {!noRequired && <i style={{ color: "red", fontSize: "22px" }}>*</i>}
        </div>
    );
};

export default Input;
