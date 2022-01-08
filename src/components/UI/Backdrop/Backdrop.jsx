import React from 'react'
import variables from '../../../sharedStyle/_variables.scss'

const backdropStyle = {
    zIndex: '100',
    top: variables.navbarHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.5s ease-in-out',
}

const Backdrop = ({ show, hide }) =>
    show ? (
        <div
            onClick={hide}
            style={backdropStyle}
            className="p-fixed w-100 h-100 l-0"
        />
    ) : null

export default Backdrop
