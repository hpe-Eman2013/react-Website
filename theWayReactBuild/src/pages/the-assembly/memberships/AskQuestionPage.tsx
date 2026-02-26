import apiClient from "@/services/apiClient";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type FormStatus = "idle" | "submitting" | "success" | "error";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function AskQuestionPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Membership");
  const [question, setQuestion] = useState("");

  const canSubmit = useMemo(() => {
    return fullName.trim() && isEmail(email) && question.trim().length >= 10;
  }, [fullName, email, question]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setError("");

    try {
      await apiClient.post("/api/membership/questions", {
        fullName,
        email,
        topic,
        question,
      });

      setStatus("success");
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err?.message || "Submission failed.";

      setStatus("error");
      setError(msg);
    }
  }

  return (
    <div className="container py-4">
      <h1>Ask a Question</h1>

      {status === "success" ? (
        <div className="alert alert-success">
          Your question has been submitted.
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="form-control"
              title="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              title="Email Address"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Topic */}
          <div className="mb-3">
            <label htmlFor="topic" className="form-label">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="form-select"
              title="Question Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="Membership">Membership</option>
              <option value="Covenant">Covenant / Commitments</option>
              <option value="Sabbaths">Sabbaths & Feasts</option>
              <option value="Stewardship">Stewardship / Agriculture</option>
              <option value="Equity">Equity / Trust Principles</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Question */}
          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Your Question *
            </label>
            <textarea
              id="question"
              name="question"
              className="form-control"
              title="Your Question"
              placeholder="Write your question here..."
              rows={5}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!canSubmit || status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Question"}
          </button>
        </form>
      )}

      <div className="mt-3">
        <Link to="/the-assembly/memberships">Back to Covenant</Link>
      </div>
    </div>
  );
}
