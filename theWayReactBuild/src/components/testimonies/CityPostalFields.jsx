import React from "react";
import { Field } from "./Field";

export function CityField({ id, value, onChange, error }) {
  return (
    <Field id={id} label="City (optional)" error={error}>
      <input
        className="tf-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="address-level2"
      />
    </Field>
  );
}

export function PostalCodeField({
  id,
  value,
  onChange,
  error,
  help = "Format varies by country (e.g., 48104 or SW1A 1AA).",
}) {
  return (
    <Field id={id} label="Postal Code (optional)" help={help} error={error}>
      <input
        className="tf-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="postal-code"
      />
    </Field>
  );
}
