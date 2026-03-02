import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

// Legal pages
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Copyright from "./pages/legal/Copyright";
import FAQ from "./pages/legal/FAQ";
import SiteMap from "./pages/legal/SiteMap";

// Giving Pages
import GivingPage from "./pages/giving/GivingPage";
import GivingSuccess from "./pages/giving/GivingSuccess";
import GivingCancel from "./pages/giving/GivingCancel";

// existing top-level pages you already had
import Home from "./pages/Home";
// import SubmitTestimony from "./pages/SubmitTestimony";
// import Testimonies from "./pages/Testimonies";

// admin
import AdminTestimonies from "./pages/AdminTestimonies";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminAuthProvider } from "./context/AdminAuthProvider";
import AdminMembershipPage from "./pages/admin/AdminMembershipPage";
import RequireAuth from "./auth/RequireAuth";
import RequireAdmin from "./auth/RequireAdmin";

// ---- Domain layouts (index.jsx) ----
import WhoAreWeLayout from "./pages/who-are-we";
import AssemblyLayout from "./pages/the-assembly";
import AccountsLayout from "./pages/accounts";
import BibleLayout from "./pages/bible";

// ---- Who Are We children ----
import AboutPage from "./pages/who-are-we/about";
import EducationPage from "./pages/who-are-we/education";
import MissionVision from "./pages/who-are-we/mission";
import OutreachPage from "./pages/who-are-we/outreach";
import StatementOfFaithPage from "./pages/who-are-we/statement-of-faith";
import ContactPage from "./pages/who-are-we/contact";

// ---- The Assembly children ----
import AssemblyLocalAssemblies from "./pages/the-assembly/local-assemblies";
import AssemblyMemberships from "./pages/the-assembly/memberships";
import RequestMembershipPage from "./pages/the-assembly/memberships/RequestMembershipPage";
import AskQuestionPage from "./pages/the-assembly/memberships/AskQuestionPage";
import AssemblyMinistries from "./pages/the-assembly/ministries";
import AssemblyPositions from "./pages/the-assembly/positions";
import AssemblySubmissions from "./pages/the-assembly/submissions";
import AssemblyTestimonies from "./pages/the-assembly/testimonies";

// ---- Accounts children ----
import LoginPage from "./pages/accounts/login";
import ProfilePage from "./pages/accounts/profile";
import RegisterPage from "./pages/accounts/register";
import VerifyEmailPage from "./pages/accounts/verify-email";

// ---- Bible children (Scriptural Discussions) ----
import ApocryphaPage from "./pages/bible/apocrypha";
import LecturesPage from "./pages/bible/lectures";
import OldCovenantPage from "./pages/bible/old-covenant";
import RenewedCovenantPage from "./pages/bible/renewed-covenant";
import ScriptualStudies from "./pages/bible/studies";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <AdminAuthProvider>
        <Routes>
          {/* ===== top-level existing ===== */}
          <Route path="/" element={<Home />} />

          {/* Keeping your existing direct pages for now (optional) */}
          {/* <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/submit" element={<SubmitTestimony />} /> */}

          {/* ===== Who Are We ===== */}
          <Route path="/who-are-we" element={<WhoAreWeLayout />}>
            <Route index element={<AboutPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="statement-of-faith"
              element={<StatementOfFaithPage />}
            />
            <Route path="mission" element={<MissionVision />} />
            <Route path="outreach" element={<OutreachPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          {/* ===== Scriptural Discussions (Bible) ===== */}
          <Route path="/bible" element={<BibleLayout />}>
            <Route index element={<ScriptualStudies />} />
            <Route path="old-covenant" element={<OldCovenantPage />} />
            <Route path="renewed-covenant" element={<RenewedCovenantPage />} />
            <Route path="apocrypha" element={<ApocryphaPage />} />
            <Route path="lectures" element={<LecturesPage />} />
            <Route path="studies" element={<ScriptualStudies />} />
          </Route>

          {/* ===== The Assembly ===== */}
          <Route path="/the-assembly" element={<AssemblyLayout />}>
            <Route index element={<AssemblyTestimonies />} />
            <Route path="testimonies" element={<AssemblyTestimonies />} />
            <Route path="submissions" element={<AssemblySubmissions />} />
            <Route path="memberships" element={<AssemblyMemberships />} />
            <Route
              path="memberships/request"
              element={<RequestMembershipPage />}
            />
            <Route path="memberships/question" element={<AskQuestionPage />} />
            <Route path="positions" element={<AssemblyPositions />} />
            <Route path="ministries" element={<AssemblyMinistries />} />
            <Route
              path="local-assemblies"
              element={<AssemblyLocalAssemblies />}
            />
          </Route>

          {/* ===== Accounts ===== */}
          <Route path="/accounts" element={<AccountsLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="verify-email" element={<VerifyEmailPage />} />
          </Route>

          {/* ===== Giving ===== */}
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/giving/success" element={<GivingSuccess />} />
          <Route path="/giving/cancel" element={<GivingCancel />} />

          {/* ===== Admin ===== */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/testimonies" element={<AdminTestimonies />} />
          <Route
            path="/admin/membership"
            element={
              <RequireAuth>
                <RequireAdmin>
                  <AdminMembershipPage />
                </RequireAdmin>
              </RequireAuth>
            }
          />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/copyright" element={<Copyright />} />
          <Route path="/legal/faq" element={<FAQ />} />
          <Route path="/legal/sitemap" element={<SiteMap />} />
        </Routes>
      </AdminAuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
