import React from 'react'
import "./Button.scss"
import { Link } from 'react-router-dom';

const Button = ({ link, to, text, type, form, onClick, className, children }) => {
    return link ? (
        <Link to={to} onClick={onClick} className={`buttonPure ${className} d-block c-pointer`}>
            {children || text}
        </Link>
    ) : (
        <button type={type} form={form} onClick={onClick} className={`buttonPure ${className} d-block c-pointer`}>
            {children || text}
        </button>
    );
}

export default Button
