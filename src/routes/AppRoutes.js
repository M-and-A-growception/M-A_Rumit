import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/common/LoginPage';
import ForgotPasswordPage from '../pages/common/ForgotPasswordPage';
import CreateAccountPage from '../pages/common/CreateAccountPage';
import ResetPassword from "../pages/common/ResetPassword";

const AppRoutes = () => {
//   const isAuthenticated = localStorage.getItem('auth'); // Example: Check authentication status

  return (
    <Routes>
          <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/resetpassword/:id" element={<ResetPassword />} />

    </Routes>
    
  );
};

export default AppRoutes;
