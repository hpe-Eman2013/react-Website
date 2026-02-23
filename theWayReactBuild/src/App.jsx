import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Testimonies from "./pages/Testimonies";
import SubmitTestimony from "./pages/SubmitTestimony";
import AdminTestimonies from "./pages/AdminTestimonies";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminAuthProvider } from "./context/AdminAuthProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StatementOfFaith from "./pages/StatementOfFaith";
import RegisterPage from "./pages/RegisterPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import LoginPage from "./pages/LoginPage";
import BibleLayout from "./pages/bible/index";
import OldCovenant from "./pages/bible/old-covenant";
import RenewedCovenant from "./pages/bible/renewed-covenant";
import Apocrypha from "./pages/bible/apocrypha";
import Lectures from "./pages/bible/lectures";
import Studies from "./pages/bible/studies";
import MissionVision from "./pages/MissionVision";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/submit" element={<SubmitTestimony />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/testimonies" element={<AdminTestimonies />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/statement-of-faith" element={<StatementOfFaith />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/scriptural-discussions" element={<BibleLayout />}>
            <Route path="old-covenant" element={<OldCovenant />} />
            <Route path="renewed-covenant" element={<RenewedCovenant />} />
            <Route path="apocrypha" element={<Apocrypha />} />
            <Route path="lectures" element={<Lectures />} />
            <Route path="studies" element={<Studies />} />
          </Route>
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
