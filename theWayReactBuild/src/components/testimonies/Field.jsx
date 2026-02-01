import React from "react";

export function Field({ id, label, required, help, error, children }) {
  const helpId = help ? `${id}-help` : undefined;
  const errId = error ? `${id}-err` : undefined;
  const describedBy = [helpId, errId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="tf-field">
      <label className="tf-label" htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>

      {/* Clone child to inject aria props + id */}
      {React.cloneElement(children, {
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
      })}

      {help ? (
        <p id={helpId} className="tf-help">
          {help}
        </p>
      ) : null}

      {error ? (
        <p id={errId} className="tf-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
