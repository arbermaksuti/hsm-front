import React, { useEffect, useState } from 'react'
import "./AddNewUser.scss"
import { FormattedMessage } from 'react-intl'
import { toast, ToastContainer } from 'react-toastify'
import Button from "../Button/Button"
import { useDispatch } from 'react-redux'
import * as actions from "../../../store/actions/index"

const AddNewUser = ({ inputsData }) => {
    let dispatch = useDispatch()
    const [input, setInput] = useState('')
    const showModal = (newUserRole) => dispatch(actions.showModal(newUserRole))

    useEffect(() => {
        if (inputsData.length === 1) {
            setInput(Object.values(Object.values(inputsData)[0])[0])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onInputSelectHandler = (e) => {
        setInput(e.target.value)
    }

    const onAddNewHandler = (showModal) => {
        if (input === '') {
            toast.error(<FormattedMessage defaultMessage="You should select on option!" id="SelectOneOption" />, { autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnFocusLoss: true, theme: 'colored', })
        } else {
            showModal(input)
        }
    }

    return (
        inputsData ? (
            <>
                <div className="addNewUser borderedDiv d-flex ai-center jc-space_between">
                    <div className="addNewUser-Wrapper">
                        <h3>
                            {inputsData.length === 1 ? `Here you can add new account for ${input}` :
                                <FormattedMessage defaultMessage="Choose type of account which you want to add" id="AddNewTitle" />}
                        </h3>
                        <form id="addNewForm" className="d-flex ai-center"
                            onSubmit={(e) => { e.preventDefault() }}>
                            {inputsData.map((i, index) => (
                                <div className="addNewUser-Input c-pointer" key={index}>
                                    <input
                                        defaultChecked={inputsData.length === 1 && true}
                                        type="radio" id={i.type} name="addNew" value={i.type} onChange={(e) => onInputSelectHandler(e)} className='c-pointer' />
                                    <label htmlFor={i.type} className='c-pointer'>{i.type}</label>
                                </div>
                            ))}
                        </form>
                    </div>
                    <Button type="submit" form="addNewForm" onClick={() => onAddNewHandler(showModal)} text={<FormattedMessage defaultMessage="Add New" id="AddNew" />} className="blueLight" />
                </div>
                <ToastContainer />
            </>
        ) : null
    )
}

export default AddNewUser
