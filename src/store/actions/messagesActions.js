import * as actionTypes from "./actionTypes";

export const addNewMessage = (newMessage) => {
  return {
    type: actionTypes.ADD_NEW_MESSAGE,
    newMessage: newMessage,
  };
};

export const removeNewMessage = (messageID) => {
  return {
    type: actionTypes.REMOVE_NEW_MESSAGE,
    messageID: messageID,
  };
};
