import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import ForgotPassword from './pages/ForgotPassword.js';

import { Helmet } from 'react-helmet';
import { DataProvider, DataContext } from './dataContext/dataContext.js';
import ScrollToTop from './helpers/ScrollToTop.js';
import ProtectedRoute from './helpers/ProtectedRoutes.js';
import LoadingOverlay from './components/loadingOverlay.js';

import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <DataProvider>
        <ScrollToTop />
        <AppContent />
      </DataProvider>
    </Router>
  );
}

function AppContent() {

  return (
    <>
      <Helmet>
        <title>Website Template</title>
        <meta name="description" content="This is were the meta description will go" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:error" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;