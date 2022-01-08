import * as actionTypes from "../actions/actionTypes";

const initialState = {
  modal: false,
  modalType: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return { ...state, modal: true, modalType: action.newUserRole };
    case actionTypes.HIDE_MODAL:
      return { ...state, modal: false, modalType: "" };
    default:
      return state;
  }
};

export default reducer;
