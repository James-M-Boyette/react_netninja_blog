import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Delete? (and delete reportWebVitals.js ?)

// Create and target a new DOM element named 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
// In that ('root') element, render App() - which is being exported from App.js
root.render(
    <React.StrictMode>
        {/* .strictMode means React will do additional checks during development and will log additional warnings in console*/}
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Delete?
