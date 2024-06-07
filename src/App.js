import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword.js';
import Layout_1 from './pages/Layout-1.js';
import Layout_2 from './pages/Layout-2.js';
import Layout_3 from './pages/Layout-3.js';

import { Helmet } from 'react-helmet';
import { DataProvider } from './dataContext/dataContext.js';
import ScrollToTop from './helpers/ScrollToTop.js';
import ProtectedRoute from './helpers/ProtectedRoutes.js';

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

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Organization",
    "url": "https://www.yourorganization.com",
    "logo": "https://www.yourorganization.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-5555",
      "contactType": "Customer Service"
    }
  };

  return (
    <>
      <Helmet>
        <title>Website Template</title>
        <meta name="description" content="This is were the meta description will go" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your page description goes here." />
        <meta property="og:image" content="https://www.yourwebsite.com/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/page-url" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website Name" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your page description goes here." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg" />
        <meta name="twitter:site" content="@yourTwitterHandle" />


        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
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
        <Route path="/layout_1" element={<Layout_1 />} />
        <Route path="/layout_2" element={<Layout_2 />} />
        <Route path="/layout_3" element={<Layout_3 />} />
        <Route path="/reset_password/:uid" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;