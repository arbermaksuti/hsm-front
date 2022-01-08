import * as actionTypes from "../actions/actionTypes";

const allMessages = [
  {
    id: 1,
    from: "Rita Ora",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    from: "Mike Tyson",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    from: "Mike Wilson",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    from: "Andy Xhaka",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const newMessages = [
  {
    id: 5,
    from: "Andy Xhaka",
    text: "Lorem Ipsum ",
    userType: "Patient",
  },
  {
    id: 6,
    from: "Andy Xhaka",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userType: "Doctor",
  },
];

const reducer = (state = { allMessages, newMessages }, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_MESSAGE:
      return { ...state.newMessages };
    case actionTypes.REMOVE_NEW_MESSAGE:
      return {
        ...state,
        allMessages: [
          ...state.allMessages,
          ...state.newMessages.filter((item) => item.id === action.messageID),
        ],
        newMessages: state.newMessages.filter(
          (item) => item.id !== action.messageID
        ),
      };

    default:
      return state;
  }
};

export default reducer;
