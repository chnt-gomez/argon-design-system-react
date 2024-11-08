/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import LoginView from "views/LoginView.js";
import Profile from "views/examples/Profile.js";
import SignupView from "views/SignupView.js";

import VerificationSuccessView from "views/VerificationSuccessView.js";
import Terms from "views/Terms";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/login" exact element={<LoginView />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/signup" exact element={<SignupView />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="/validation-success" exact element={<VerificationSuccessView />} />
      <Route path="/validation-success" exact element={<VerificationSuccessView />} />

      <Route path="/tos" exact element={<Terms />} />
    </Routes>
  </BrowserRouter>
);
