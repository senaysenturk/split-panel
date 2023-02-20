import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import panel1Reducer from "./reducers/panel1Reducer";
import panel2Reducer from "./reducers/panel2Reducer";
import panel3Reducer from "./reducers/panel3Reducer";
import { DashboardProvider } from "./contexts/dashboardContext";

const rootReducer = combineReducers({
  panel1: panel1Reducer,
  panel2: panel2Reducer,
  panel3: panel3Reducer,
});

const store = createStore(
  rootReducer,
  {
    //Initial state
    panel1: {
      width: 0,
      height: 0,
    },
    panel2: {
      width: 0,
      height: 0,
    },
    panel3: {
      width: 0,
      height: 0,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </Provider>
  </React.StrictMode>
);
