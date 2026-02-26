import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestimonyFormEnhanced from "@/components/testimonies/TestimonyFormEnhanced";
import "@/assets/css/SubmitTestimony.css";
import { createTestimonyFormData } from "@/services/testimonyService";

// Match what your form actually sends into onSubmit
type SubmitTestimonyPayload = {
  name: string;
  message: string;
  location?: string;
  avatarFile?: File | null;

  // honeypot
  website?: string;

  // optional "request response" feature
  requestResponse?: boolean;
  contactEmail?: string;
};

// Minimal shape for axios-like error objects
type ApiErrorData = { message?: string };
type AxiosLikeError = {
  message?: string;
  response?: { data?: ApiErrorData };
};

function getErrorMessage(err: unknown): string {
  const e = err as AxiosLikeError;

  return (
    e?.response?.data?.message ||
    e?.message ||
    "Something went wrong. Please try again."
  );
}

export default function SubmitTestimony() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(payload: SubmitTestimonyPayload) {
    setIsSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await createTestimonyFormData({
        name: payload.name,
        message: payload.message,
        location: payload.location,
        avatarFile: payload.avatarFile ?? null,

        website: payload.website, // honeypot

        requestResponse: payload.requestResponse ?? false,
        contactEmail: payload.contactEmail,
      });

      setSuccessMsg(
        "Thank you! Your testimony was submitted and will appear after admin approval.",
      );

      navigate("/testimonies?submitted=1");
    } catch (err: unknown) {
      setErrorMsg(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="wom-submissions">
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
    </div>
  );
}
