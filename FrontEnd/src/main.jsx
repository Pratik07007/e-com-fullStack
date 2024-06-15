import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
// Suspense


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" />
    
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
