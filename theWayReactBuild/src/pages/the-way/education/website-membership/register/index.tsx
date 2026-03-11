import React, { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@/assets/css/the-way/WebsiteMembershipRegister.css";
import registerHero from "@/assets/images/the-way/education/register.jpg";

type ViewState = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 20;

export default function WebsiteMembershipRegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [status, setStatus] = useState<ViewState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fullNameError = useMemo(() => {
    if (!fullName.trim()) return "Full name is required.";
    if (fullName.trim().length < 2)
      return "Full name must be at least 2 characters.";
    return "";
  }, [fullName]);

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

  const confirmPasswordError = useMemo(() => {
    if (!confirmPassword) return "Please confirm your password.";
    if (confirmPassword !== password) return "Passwords do not match.";
    return "";
  }, [confirmPassword, password]);

  const termsError = useMemo(() => {
    if (!agreeToTerms) return "You must agree before submitting.";
    return "";
  }, [agreeToTerms]);

  const canSubmit =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    agreeToTerms &&
    !fullNameError &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError &&
    status !== "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (
      fullNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      termsError
    ) {
      setStatus("error");
      setErrorMessage(
        fullNameError ||
          emailError ||
          passwordError ||
          confirmPasswordError ||
          termsError,
      );
      return;
    }

    try {
      setStatus("submitting");

      const res = await fetch("/api/website-membership/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        user?: {
          id?: string;
          fullName?: string;
          email?: string;
          isApproved?: boolean;
          hasEducationAccess?: boolean;
        };
      };

      if (!res.ok) {
        throw new Error(
          data?.message || "Registration failed. Please try again.",
        );
      }

      setStatus("success");
      setSuccessMessage(
        data?.message ||
          "Registration submitted successfully. You may need approval before full access is granted.",
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeToTerms(false);

      window.setTimeout(() => {
        navigate("/the-way/education/website-membership/login");
      }, 1200);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong during registration.";
      setStatus("error");
      setErrorMessage(message);
    }
  }

  return (
    <main className="wm-register-page">
      <section className="wm-register-hero page-with-hero">
        <img
          src={registerHero}
          alt="Website membership registration"
          className="wm-register-hero__image"
        />
        <div className="wm-register-hero__overlay" />
        <div className="wm-register-hero__content">
          <div className="wm-register-hero__top">
            <p className="wm-register-hero__eyebrow">Website Membership</p>
            <h1 className="wm-register-hero__title">
              Create Your Member Account
            </h1>
          </div>

          <p className="wm-register-hero__subtitle">
            Register for website membership to begin your path toward protected
            education resources, study materials, and future member access.
          </p>
        </div>
      </section>

      <section className="wm-register-section">
        <div className="wm-register-shell">
          <div className="wm-register-card">
            <div className="wm-register-card__header">
              <h2>Register</h2>
              <p>
                Complete the form below to request or create your website
                membership account.
              </p>
            </div>

            <form
              className="wm-register-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="wm-form-group">
                <label htmlFor="website-membership-full-name">Full name</label>
                <input
                  id="website-membership-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {fullName && fullNameError ? (
                  <p className="wm-field-error">{fullNameError}</p>
                ) : null}
              </div>

              <div className="wm-form-group">
                <label htmlFor="website-membership-register-email">
                  Email address
                </label>
                <input
                  id="website-membership-register-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="wm-help-text">
                  Use an email address you can access reliably.
                </small>
                {email && emailError ? (
                  <p className="wm-field-error">{emailError}</p>
                ) : null}
              </div>

              <div className="wm-form-group">
                <label htmlFor="website-membership-register-password">
                  Password
                </label>
                <div className="wm-password-wrap">
                  <input
                    id="website-membership-register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
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

              <div className="wm-form-group">
                <label htmlFor="website-membership-confirm-password">
                  Confirm password
                </label>
                <div className="wm-password-wrap">
                  <input
                    id="website-membership-confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="wm-password-toggle"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {confirmPassword && confirmPasswordError ? (
                  <p className="wm-field-error">{confirmPasswordError}</p>
                ) : null}
              </div>

              <div className="wm-form-row wm-form-row--stack">
                <label
                  className="wm-checkbox"
                  htmlFor="website-membership-agree"
                >
                  <input
                    id="website-membership-agree"
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                  <span>
                    I understand that membership access may be reviewed or
                    approved before full education access is granted.
                  </span>
                </label>
              </div>

              {!agreeToTerms && status === "error" ? (
                <p className="wm-field-error">{termsError}</p>
              ) : null}

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
                className="wm-register-submit"
                disabled={!canSubmit}
              >
                {status === "submitting" ? "Submitting..." : "Create Account"}
              </button>
            </form>
          </div>

          <aside className="wm-register-sidecard">
            <h3>Already have an account?</h3>
            <p>
              Return to the login page to sign in and access your membership
              area.
            </p>

            <div className="wm-register-sidecard__actions">
              <Link
                to="/the-way/education/website-membership/login"
                className="wm-secondary-btn"
              >
                Go to Login
              </Link>

              <Link to="/the-way/education" className="wm-text-link">
                Back to Education
              </Link>
            </div>

            <div className="wm-register-note">
              <strong>Note:</strong> Registration does not necessarily mean
              immediate approval for all protected content.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
