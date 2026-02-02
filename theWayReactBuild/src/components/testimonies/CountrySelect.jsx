import React from "react";

export function CountrySelect({ id, value, onChange, countries, error }) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        Country
      </label>

      <select
        id={id}
        className={`form-select ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="country"
        aria-invalid={Boolean(error)}
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>

      <div className="form-text">
        You may leave location blank if you prefer.
      </div>

      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
}
