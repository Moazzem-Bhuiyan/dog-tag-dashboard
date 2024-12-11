import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/style.css";
import "./css/satoshi.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
  
        <Toaster position="top-right" reverseOrder={false}/>
        <App />
 
    </BrowserRouter>
    ,
  </React.StrictMode>
);
