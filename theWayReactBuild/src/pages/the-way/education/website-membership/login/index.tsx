import React, { FormEvent, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "@/assets/css/the-way/WebsiteMembershipLogin.css";
import loginHero from "@/assets/images/the-way/education/login.png";

type ViewState = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 20;

export default function WebsiteMembershipLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [status, setStatus] = useState<ViewState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const from = useMemo(() => {
    const state = location.state as { from?: { pathname?: string } } | null;
    return state?.from?.pathname || "/the-way/education";
  }, [location.state]);

  const emailError = useMemo(() => {
    if (!email.trim()) return "Email is required.";
    if (!EMAIL_REGEX.test(email.trim())) return "Enter a valid email address.";
    return "";
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return "Password is required.";
    if (password.length < PASSWORD_MIN || password.length > PASSWORD_MAX) {
      return `Password must be between ${PASSWORD_MIN} and ${PASSWORD_MAX} characters.`;
    }
    return "";
  }, [password]);

  const canSubmit =
    email.trim() !== "" &&
    password !== "" &&
    !emailError &&
    !passwordError &&
    status !== "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (emailError || passwordError) {
      setStatus("error");
      setErrorMessage(emailError || passwordError);
      return;
    }

    try {
      setStatus("submitting");

      const res = await fetch("/api/website-membership/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          rememberMe,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        token?: string;
        user?: {
          id?: string;
          email?: string;
          fullName?: string;
          isApproved?: boolean;
          hasEducationAccess?: boolean;
        };
      };

      if (!res.ok) {
        throw new Error(data?.message || "Login failed. Please try again.");
      }

      if (data?.token) {
        if (rememberMe) {
          localStorage.setItem("womWebsiteMembershipToken", data.token);
        } else {
          sessionStorage.setItem("womWebsiteMembershipToken", data.token);
        }
      }

      if (data?.user) {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("womWebsiteMembershipUser", JSON.stringify(data.user));
      }

      if (data?.user && data.user.isApproved === false) {
        throw new Error(
          "Your account exists, but your membership has not yet been approved.",
        );
      }

      if (data?.user && data.user.hasEducationAccess === false) {
        throw new Error(
          "Your account is active, but education access is not enabled yet.",
        );
      }

      setStatus("success");
      setSuccessMessage(data?.message || "Login successful. Redirecting...");

      navigate(from, { replace: true });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong during login.";
      setStatus("error");
      setErrorMessage(message);
    }
  }

  return (
    <main className="wm-login-page">
      <section className="wm-login-hero page-with-hero">
        <img
          src={loginHero}
          alt="Education membership login"
          className="wm-login-hero__image"
        />
        <div className="wm-login-hero__overlay" />
        <div className="wm-login-hero__content">
          <div className="wm-login-hero__top">
            <p className="wm-login-hero__eyebrow">Website Membership</p>
            <h1 className="wm-login-hero__title">Education Member Login</h1>
          </div>

          <p className="wm-login-hero__subtitle">
            Access study resources, protected education materials, and member
            content through your approved website membership account.
          </p>
        </div>
      </section>

      <section className="wm-login-section">
        <div className="wm-login-shell">
          <div className="wm-login-card">
            <div className="wm-login-card__header">
              <h2>Sign in</h2>
              <p>
                Enter the email and password associated with your website
                membership.
              </p>
            </div>

            <form className="wm-login-form" onSubmit={handleSubmit} noValidate>
              <div className="wm-form-group">
                <label htmlFor="website-membership-email">Email address</label>
                <input
                  id="website-membership-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="wm-help-text">
                  Use the email connected to your membership account.
                </small>
                {email && emailError ? (
                  <p className="wm-field-error">{emailError}</p>
                ) : null}
              </div>

              <div className="wm-form-group">
                <label htmlFor="website-membership-password">Password</label>

                <div className="wm-password-wrap">
                  <input
                    id="website-membership-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="wm-password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <small className="wm-help-text">
                  Password must be between {PASSWORD_MIN} and {PASSWORD_MAX}{" "}
                  characters.
                </small>

                {password && passwordError ? (
                  <p className="wm-field-error">{passwordError}</p>
                ) : null}
              </div>

              <div className="wm-form-row">
                <label className="wm-checkbox" htmlFor="remember-me">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me on this device</span>
                </label>

                <Link
                  to="/the-way/education/website-membership/register"
                  className="wm-inline-link"
                >
                  Need an account?
                </Link>
              </div>

              {status === "error" && errorMessage ? (
                <div className="wm-alert wm-alert--error">{errorMessage}</div>
              ) : null}

              {status === "success" && successMessage ? (
                <div className="wm-alert wm-alert--success">
                  {successMessage}
                </div>
              ) : null}

              <button
                type="submit"
                className="wm-login-submit"
                disabled={!canSubmit}
              >
                {status === "submitting" ? "Signing in..." : "Login"}
              </button>
            </form>
          </div>

          <aside className="wm-login-sidecard">
            <h3>Not a member yet?</h3>
            <p>
              Request website membership to gain access to education resources,
              protected study material, and future member features.
            </p>

            <div className="wm-login-sidecard__actions">
              <Link
                to="/the-way/education/website-membership/register"
                className="wm-secondary-btn"
              >
                Request Membership
              </Link>

              <Link to="/the-way/education" className="wm-text-link">
                Back to Education
              </Link>
            </div>

            <div className="wm-login-note">
              <strong>Note:</strong> Membership approval may be required before
              full access is granted.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
