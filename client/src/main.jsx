import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Preferences from "./pages/preferences/Preferences";
import Templates from "./pages/templates/Templates";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
