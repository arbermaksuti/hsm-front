import * as actionTypes from "./actionTypes";

export const showModal = (newUserRole, modalContent) => {
  return {
    type: actionTypes.SHOW_MODAL,
    newUserRole: newUserRole,
    modalContent: modalContent,
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL,
  };
};
