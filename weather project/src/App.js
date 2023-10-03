import React from "react";

import "./App.scss";

import Router from "./Router";
import { Provider } from "mobx-react";
import store from "./store/AppStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
