import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestimonyFormEnhanced from "../components/testimonies/TestimonyFormEnhanced";
import "../assets/css/SubmitTestimony.css";
import { createTestimonyFormData } from "../services/testimonyService";

export default function SubmitTestimony() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(payload) {
    setIsSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await createTestimonyFormData({
        name: payload.name,
        message: payload.message,
        location: payload.location,
        avatarFile: payload.avatarFile,

        website: payload.website, // honeypot

        requestResponse: payload.requestResponse,
        contactEmail: payload.contactEmail,
      });

      setSuccessMsg(
        "Thank you! Your testimony was submitted and will appear after admin approval.",
      );

      navigate("/testimonies?submitted=1");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";

      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="submit-page">
      <section className="submit-card">
        <header className="submit-header">
          <h1>Share Your Testimony</h1>
          <p className="submit-subtitle">
            Your words may encourage, heal, and strengthen others.
          </p>
        </header>

        {successMsg && (
          <div className="submit-success" role="status" aria-live="polite">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        )}

        <TestimonyFormEnhanced
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </section>
    </main>
  );
}
