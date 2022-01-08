import * as actionTypes from "./actionTypes";

export const showModal = (newUserRole) => {
  return {
    type: actionTypes.SHOW_MODAL,
    newUserRole: newUserRole,
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL,
  };
};
