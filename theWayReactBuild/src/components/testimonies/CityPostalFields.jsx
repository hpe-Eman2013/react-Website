import React from "react";
import PropTypes from "prop-types";
import { Field } from "./Field";

export function CityField({ id, value, onChange, error }) {
  return (
    <Field id={id} label="City (optional)" error={error}>
      <input
        id={id}
        className="tf-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="address-level2"
      />
    </Field>
  );
}

CityField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

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
        id={id}
        className="tf-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="postal-code"
      />
    </Field>
  );
}

PostalCodeField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  help: PropTypes.string,
};
