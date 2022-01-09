import * as actionTypes from "../actions/actionTypes";

const initialState = {
  modal: false,
  modalType: "",
  modalContent: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: true,
        modalType: action.newUserRole,
        modalContent: action.modalContent,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        modal: false,
        modalType: "",
        modalContent: "",
      };
    default:
      return state;
  }
};

export default reducer;
