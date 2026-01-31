import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Testimonies from "./pages/Testimonies";
import SubmitTestimony from "./pages/SubmitTestimony";
import AdminTestimonies from "./pages/AdminTestimonies";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/submit" element={<SubmitTestimony />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/testimonies" element={<AdminTestimonies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
