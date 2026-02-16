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
          <Route path="/contact" element={<Contact />} />
          <Route path="/statement-of-faith" element={<StatementOfFaith />} />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
