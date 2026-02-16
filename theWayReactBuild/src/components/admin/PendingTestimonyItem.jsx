/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PendingTestimonyItem = ({
  testimony,
  checked,
  onToggle,
  onApprove,
  onDelete,
  disabled,
}) => {
  const createdLabel = testimony?.createdAt
    ? new Date(testimony.createdAt).toLocaleString()
    : "";

  // Normalize requestResponse (handles true / "true" / 1 / "1")
  const requestResponse =
    testimony?.requestResponse === true ||
    testimony?.requestResponse === "true" ||
    testimony?.requestResponse === 1 ||
    testimony?.requestResponse === "1";

  const email = (testimony?.contactEmail || "").trim();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      // optional: toast later
    }
  }

  return (
    <div
      className={`border rounded p-3 ${requestResponse ? "border-warning" : ""}`}
      style={requestResponse ? { borderLeftWidth: 6 } : undefined}
    >
      <div className="d-flex align-items-start gap-2">
        <input
          className="form-check-input mt-1"
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          aria-label={`Select testimony from ${testimony?.name || "Anonymous"}`}
        />

        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="fw-semibold">{testimony?.name || "Anonymous"}</div>

            {requestResponse && (
              <span className="badge rounded-pill text-bg-warning">
                Response requested
              </span>
            )}
          </div>

          <div className="text-muted small mb-2">{createdLabel}</div>

          {requestResponse && (
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
              {email ? (
                <>
                  <span className="small">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${email}`} className="link-primary">
                      {email}
                    </a>
                  </span>

                  <a
                    className="btn btn-sm btn-outline-primary"
                    href={`mailto:${email}`}
                    aria-label={`Email ${email}`}
                    title="Compose email"
                  >
                    Email
                  </a>

                  <button
                    type="button"
                    className={`btn btn-sm ${
                      copied ? "btn-success" : "btn-outline-secondary"
                    }`}
                    onClick={copyEmail}
                    disabled={!email}
                    aria-label={`Copy email ${email}`}
                    title="Copy email"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </>
              ) : (
                <span className="text-danger small">
                  Missing email (response requested)
                </span>
              )}
            </div>
          )}

          <div>{testimony?.message}</div>
        </div>

        <div className="d-flex gap-2">
          {typeof onApprove === "function" && (
            <button
              className="btn btn-sm btn-outline-success"
              onClick={onApprove}
              disabled={disabled}
              aria-label="Approve testimony"
            >
              Approve
            </button>
          )}

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
            disabled={disabled}
            aria-label="Delete testimony"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingTestimonyItem;
