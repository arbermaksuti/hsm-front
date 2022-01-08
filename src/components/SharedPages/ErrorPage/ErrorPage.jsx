import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ErrorPage = () => {
    let navigate = useNavigate()
    let location = useLocation().pathname;

    return (
        <div>
            Page "{location.toUpperCase().slice(1)}" is under
            construction, please wait final version
            <button
                onClick={() => navigate(-1)}
                className="underConstraction-button"
                style={{
                    backgroundColor: 'blue',
                    border: 'none',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    width: '70px',
                    height: '30px',
                    color: '#fff',
                    fontSize: '1em',
                }}
            >
                Go Back
            </button>
        </div>
    )
}

export default ErrorPage
