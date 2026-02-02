import React from "react";

export function StateProvinceField({
  id,
  countryCode,
  value,
  onChange,
  statesByCountry,
  error,
}) {
  const options = statesByCountry[countryCode] || [];
  const hasDropdown = options.length > 0;

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        State / Province (optional)
      </label>

      {hasDropdown ? (
        <select
          id={id}
          className={`form-select ${error ? "is-invalid" : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="address-level1"
          aria-invalid={Boolean(error)}
        >
          <option value="">Select…</option>
          {options.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={`form-control ${error ? "is-invalid" : ""}`}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="address-level1"
          aria-invalid={Boolean(error)}
        />
      )}

      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
}
