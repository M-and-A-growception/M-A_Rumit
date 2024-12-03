import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/common/LoginPage';
import ForgotPasswordPage from '../pages/common/ForgotPasswordPage';
import CreateAccountPage from '../pages/common/CreateAccountPage';
import ResetPassword from "../pages/common/ResetPassword";
import Home from "../pages/Home"
import AutoComplete from '../pages/common/AutoComplete'

const AppRoutes = () => {
//   const isAuthenticated = localStorage.getItem('auth'); // Example: Check authentication status

  return (
    <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/google" element={<AutoComplete />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/home" element={<Home/>}/>

    </Routes>
    
  );
};

export default AppRoutes;
