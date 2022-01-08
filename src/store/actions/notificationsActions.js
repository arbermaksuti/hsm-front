import * as actionTypes from "./actionTypes";

export const addNewNotification = (newNotification) => {
  return {
    type: actionTypes.ADD_NEW_NOTIFICATION,
    newNotification: newNotification,
  };
};

export const removeNewNotification = (notificationID) => {
  return {
    type: actionTypes.REMOVE_NEW_NOTIFICATION,
    notificationID: notificationID,
  };
};
