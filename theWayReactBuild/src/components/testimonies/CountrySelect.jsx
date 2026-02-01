import React from "react";
import { Field } from "./Field";

export function CountrySelect({
  id,
  value,
  onChange,
  countries,
  error,
  help = "You may leave location blank if you prefer.",
}) {
  return (
    <Field id={id} label="Country" help={help} error={error}>
      <select
        className="tf-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="country"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </Field>
  );
}
