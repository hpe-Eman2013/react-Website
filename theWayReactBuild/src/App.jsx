import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
import Home from "./pages/home";
import ContactPage from "./pages/contact";
import EventsPage from "./pages/events";

// admin
import AdminTestimonies from "./pages/admin/AdminTestimonies";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminAuthProvider } from "./context/AdminAuthProvider";
import AdminMembershipPage from "./pages/admin/AdminMembershipPage";
import RequireAuth from "./auth/RequireAuth";
import RequireAdmin from "./auth/RequireAdmin";

// ---- Domain layouts (index.jsx) ----
import TheWayLayout from "./pages/the-way/Layout";
import TheWayPage from "./pages/the-way/TheWayOfMessiah";
import AssemblyLayout from "./pages/the-assembly";
import AccountsLayout from "./pages/accounts";
import BibleLayout from "./pages/the-way/scriptural-discussions";

// ---- The Way children ----
import AboutPage from "./pages/the-way/about";
import EducationPage from "./pages/the-way/education";
import MissionVision from "./pages/the-way/mission";
import OutreachPage from "./pages/the-way/outreach";
import StatementOfFaithPage from "./pages/the-way/statement-of-faith";
import WebsiteMembershipLoginPage from "@/pages/the-way/education/website-membership/login";
import WebsiteMembershipRegisterPage from "@/pages/the-way/education/website-membership/register";

// ---- The Assembly children ----
import AssemblyLocalAssemblies from "./pages/the-assembly/local-assemblies";
import AssemblyMemberships from "./pages/the-assembly/memberships";
import RequestMembershipPage from "./pages/the-assembly/memberships/requests";
import AskQuestionPage from "./pages/the-assembly/memberships/questions";
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
import ApocryphaPage from "./pages/the-way/scriptural-discussions/apocrypha";
import LecturesPage from "./pages/the-way/scriptural-discussions/lectures-sermons";
import OldCovenantPage from "./pages/the-way/scriptural-discussions/old-covenant";
import RenewedCovenantPage from "./pages/the-way/scriptural-discussions/renewed-covenant";
import ScriptualStudies from "./pages/the-way/scriptural-discussions/scriptural-studies";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppNavbar />

      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="/the-way" element={<TheWayLayout />}>
            <Route index element={<TheWayPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="statement-of-faith"
              element={<StatementOfFaithPage />}
            />
            <Route path="mission" element={<MissionVision />} />
            <Route path="outreach" element={<OutreachPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route
              path="/the-way/education/website-membership/login"
              element={<WebsiteMembershipLoginPage />}
            />
            <Route
              path="/the-way/education/website-membership/register"
              element={<WebsiteMembershipRegisterPage />}
            />

            <Route
              path="/the-way/scriptural-discussions"
              element={<BibleLayout />}
            >
              <Route index element={<ScriptualStudies />} />
              <Route path="old-covenant" element={<OldCovenantPage />} />
              <Route
                path="renewed-covenant"
                element={<RenewedCovenantPage />}
              />
              <Route path="apocrypha" element={<ApocryphaPage />} />
              <Route path="lectures-sermons" element={<LecturesPage />} />
              <Route path="scriptural-studies" element={<ScriptualStudies />} />
            </Route>
          </Route>

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

          <Route path="/accounts" element={<AccountsLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="verify-email" element={<VerifyEmailPage />} />
          </Route>

          <Route path="/giving" element={<GivingPage />} />
          <Route path="/giving/success" element={<GivingSuccess />} />
          <Route path="/giving/cancel" element={<GivingCancel />} />

          <Route path="/events" element={<EventsPage />} />

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
