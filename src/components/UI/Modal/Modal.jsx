import React from "react";
import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions";
import { IoClose } from "react-icons/io5";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import Backdrop from "../Backdrop/Backdrop";
import AddPatientInputs from "./addPatient/AddPatientInputs";
import AddDoctorInputs from "./addDoctor/AddDoctorInputs";
import AddAdminInputs from "./addAdmin/AddAdminInputs";
import Button from "../Button/Button";

const Modal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.modalReducer.modal);
    const modalType = useSelector((state) => state.modalReducer.modalType);
    const modalContent = useSelector((state) => state.modalReducer.modalContent);
    const hideModal = () => dispatch(actions.hideModal());

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success(
            <FormattedMessage
                defaultMessage="User successfully has been added!"
                id="UserSuccessAdd"
            />,
            {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                theme: "colored",
            }
        );
        hideModal();
    };

    let content;

    if (
        modalType === "Patient" ||
        modalType === "Doctor" ||
        modalType === "Admin"
    ) {
        content = (
            <>
                <div className="modal-Header p-relative">
                    <IoClose onClick={hideModal} className="p-absolute c-pointer" />
                    <h2 className="modal-Title t-center">
                        <FormattedMessage
                            defaultMessage="You are ready to add new user with role "
                            id="AddNewModalTitle"
                        />
                        "
                        <FormattedMessage
                            defaultMessage={`${modalType}`}
                            id={`${modalType}`}
                        />
                        "
                    </h2>
                </div>
                <div className="modal-Body scrollable">
                    <form
                        id="modalForm"
                        onSubmit={submitHandler}
                        className="modal-Form d-flex jc-space_between f-wrap"
                    >
                        {modalType === "Patient" ? (
                            <AddPatientInputs />
                        ) : modalType === "Doctor" ? (
                            <AddDoctorInputs />
                        ) : modalType === "Admin" ? (
                            <AddAdminInputs />
                        ) : null}
                    </form>
                    <Button
                        type="submit"
                        form="modalForm"
                        text={<FormattedMessage defaultMessage="Add New" id="AddNew" />}
                    />
                </div>
            </>
        );
    } else if (modalContent !== "") {
        content = modalContent;
    } else content = null;

    return (
        showModal && (
            <div className="modal p-fixed">
                <div className="modal-Content p-relative">{content}</div>
                <Backdrop show={showModal} hide={hideModal} />
            </div>
        )
    );
};

export default Modal;
