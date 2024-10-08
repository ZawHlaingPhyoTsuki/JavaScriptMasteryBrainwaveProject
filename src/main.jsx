import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import App from "./pages/HomePage.jsx";
import "./index.css";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
