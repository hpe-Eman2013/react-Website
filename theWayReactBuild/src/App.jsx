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

// Existing top-level pages
import Home from "./pages/home";
import ContactPage from "./pages/contact";
import EventsPage from "./pages/events";

// Admin
import AdminTestimonies from "./pages/admin/AdminTestimonies";
import AdminLogin from "./pages/admin/AdminLogin";
import { AdminAuthProvider } from "./context/AdminAuthProvider";
import AdminMembershipPage from "./pages/admin/AdminMembershipPage";
import RequireAuth from "./auth/RequireAuth";
import RequireAdmin from "./auth/RequireAdmin";

// Domain layouts
import TheWayLayout from "./pages/the-way/Layout";
import TheWayPage from "./pages/the-way/TheWayOfMessiah";
import AssemblyLayout from "./pages/the-assembly";
import AccountsLayout from "./pages/accounts";
import ScripturalDiscussionsLayout from "./pages/the-way/scriptural-discussions/Layout";

// The Way children
import AboutPage from "./pages/the-way/about";
import EducationPage from "./pages/the-way/education";
import MissionVision from "./pages/the-way/mission";
import OutreachPage from "./pages/the-way/outreach";
import StatementOfFaithPage from "./pages/the-way/statement-of-faith";
import WebsiteMembershipLoginPage from "@/pages/the-way/education/website-membership/login";
import WebsiteMembershipRegisterPage from "@/pages/the-way/education/website-membership/register";

// The Assembly children
import AssemblyLocalAssemblies from "./pages/the-assembly/local-assemblies";
import AssemblyMemberships from "./pages/the-assembly/memberships";
import RequestMembershipPage from "./pages/the-assembly/memberships/requests";
import AskQuestionPage from "./pages/the-assembly/memberships/questions";
import AssemblyMinistries from "./pages/the-assembly/ministries";
import AssemblyPositions from "./pages/the-assembly/positions";
import AssemblySubmissions from "./pages/the-assembly/submissions";
import AssemblyTestimonies from "./pages/the-assembly/testimonies";

// Accounts children
import LoginPage from "./pages/accounts/login";
import ProfilePage from "./pages/accounts/profile";
import RegisterPage from "./pages/accounts/register";
import VerifyEmailPage from "./pages/accounts/verify-email";

// Scriptural Discussions children
import ScripturalDiscussionsOverview from "./pages/the-way/scriptural-discussions";
import ScripturalDiscussionsAccessPage from "./pages/the-way/scriptural-discussions/access";
import LecturesPage from "./pages/the-way/scriptural-discussions/lectures-sermons";
import ScripturalStudies from "./pages/the-way/scriptural-discussions/scriptural-studies";
import AttackOnTheSeedPage from "./pages/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed";
import AttackOnTheSeedPart1Page from "./pages/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1";
import AttackOnTheSeedPart2Page from "./pages/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-2";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppNavbar />

      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />

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
              path="education/website-membership/login"
              element={<WebsiteMembershipLoginPage />}
            />
            <Route
              path="education/website-membership/register"
              element={<WebsiteMembershipRegisterPage />}
            />

            <Route
              path="scriptural-discussions"
              element={<ScripturalDiscussionsLayout />}
            >
              <Route index element={<ScripturalDiscussionsOverview />} />
              <Route
                path="overview"
                element={<ScripturalDiscussionsOverview />}
              />
              <Route
                path="access"
                element={<ScripturalDiscussionsAccessPage />}
              />
              <Route path="lectures-sermons" element={<LecturesPage />} />
              <Route
                path="scriptural-studies"
                element={<ScripturalStudies />}
              />
              <Route
                path="scriptural-studies/attack-on-the-seed"
                element={<AttackOnTheSeedPage />}
              />
              <Route
                path="scriptural-studies/attack-on-the-seed/part-1"
                element={<AttackOnTheSeedPart1Page />}
              />
              <Route
                path="scriptural-studies/attack-on-the-seed/part-2"
                element={<AttackOnTheSeedPart2Page />}
              />
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
