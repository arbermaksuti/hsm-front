import React from "react";
import "./index.scss";
import "./sharedStyle/_classes.scss";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import modalReducer from "./store/reducers/modalReducer";
import notificationsReducer from "./store/reducers/notificationsReducer";
import messagesReducer from "./store/reducers/messagesReducer";

const allReducers = combineReducers({
  modalReducer: modalReducer,
  notificationsReducer: notificationsReducer,
  messagesReducer: messagesReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
