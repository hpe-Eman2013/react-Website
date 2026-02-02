import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestimonyFormEnhanced from "../components/testimonies/TestimonyFormEnhanced";
import "../assets/css/SubmitTestimony.css";

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
      const fd = new FormData();

      // Text fields
      fd.append("name", payload.name);
      fd.append("message", payload.message);

      // Location (send as JSON string for simplicity)
      fd.append("location", JSON.stringify(payload.location || {}));

      // File (optional)
      if (payload.avatarFile) {
        fd.append("avatar", payload.avatarFile); // field name must match backend
      }

      const res = await fetch("/api/testimonies", {
        method: "POST",
        body: fd, // DO NOT set Content-Type for FormData; browser sets boundary
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || `Request failed: ${res.status}`);
      }

      setSuccessMsg(
        "Thank you! Your testimony was submitted and will appear after admin approval.",
      );
      navigate("/testimonies?submitted=1");
    } catch (err) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
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
          <div className="submit-error" role="alert">
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
