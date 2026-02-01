import React from "react";
import { Field } from "./Field";

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

  if (hasDropdown) {
    return (
      <Field id={id} label="State / Province" error={error}>
        <select
          className="tf-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="address-level1"
        >
          <option value="">Select…</option>
          {options.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
      </Field>
    );
  }

  return (
    <Field id={id} label="State / Province (optional)" error={error}>
      <input
        className="tf-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="address-level1"
      />
    </Field>
  );
}
