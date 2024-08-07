import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProviderContext from "./contexts/UserProviderContext.jsx";
import DataProviderContex from "./contexts/DataProviderContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" />
    <BrowserRouter>
      <UserProviderContext>
        <DataProviderContex>
          <App />
        </DataProviderContex>
      </UserProviderContext>
    </BrowserRouter>
  </React.StrictMode>
);
