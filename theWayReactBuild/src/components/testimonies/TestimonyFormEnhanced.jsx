import React, { useId, useMemo, useState } from "react";
import { CountrySelect } from "./CountrySelect";
import { StateProvinceField } from "./StateProvinceField";
import { CityField, PostalCodeField } from "./CityPostalFields";
import { AvatarUploader } from "./AvatarUploader";
import { Field } from "./Field";

export default function TestimonyFormEnhanced({
  onSubmit,
  isSubmitting = false,
}) {
  const formId = useId();

  const countries = useMemo(
    () => [
      { code: "US", name: "United States" },
      { code: "CA", name: "Canada" },
      { code: "GB", name: "United Kingdom" },
      { code: "OTHER", name: "Other / Not listed" },
    ],
    [],
  );

  const statesByCountry = useMemo(
    () => ({
      US: [
        { code: "MI", name: "Michigan" },
        { code: "CA", name: "California" },
        { code: "TX", name: "Texas" },
        { code: "NY", name: "New York" },
      ],
      CA: [
        { code: "ON", name: "Ontario" },
        { code: "QC", name: "Québec" },
      ],
      GB: [
        { code: "ENG", name: "England" },
        { code: "SCT", name: "Scotland" },
      ],
    }),
    [],
  );

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [country, setCountry] = useState("US");
  const [stateProvince, setStateProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarError, setAvatarError] = useState("");

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  // in TestimonyFormEnhanced.jsx

  function handleCountryChange(nextCountry) {
    setCountry(nextCountry);

    const options = statesByCountry[nextCountry] || [];
    const hasDropdown = options.length > 0;

    // If dropdown exists and current selection is not valid for that dropdown, clear it.
    if (hasDropdown) {
      setStateProvince((prev) =>
        options.some((s) => s.code === prev) ? prev : "",
      );
    }

    // If dropdown does NOT exist, keep stateProvince as free text (no need to clear).
    // If you want to clear it on country change anyway, do it here intentionally.
  }

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!message.trim()) next.message = "Please enter your testimony.";
    if (postalCode && postalCode.trim().length < 3)
      next.postalCode = "Postal code looks too short.";
    if (city && city.trim().length < 2)
      next.city = "City name looks too short.";
    return next;
  }

  function focusFirstError(nextErrors) {
    const order = [
      "name",
      "message",
      "country",
      "stateProvince",
      "city",
      "postalCode",
    ];
    for (const key of order) {
      if (nextErrors[key]) {
        const el = document.getElementById(`${formId}-${key}`);
        el?.focus?.();
        break;
      }
    }
  }
  function sanitizeStateProvince({ country, stateProvince, statesByCountry }) {
    const raw = (stateProvince || "").trim();
    if (!raw) return null;

    const options = statesByCountry[country] || [];
    const hasDropdown = options.length > 0;

    // If we have a dropdown list for the selected country,
    // only accept values that exist in the list.
    if (hasDropdown) {
      return options.some((s) => s.code === raw) ? raw : null;
    }

    // If we don't have a dropdown list, treat it as free-text.
    return raw;
  }
  function sanitizeCountry(country, countries) {
    return countries.some((c) => c.code === country) ? country : "OTHER";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const nextErrors = validate();
    const safeCountry = sanitizeCountry(country, countries);
    setErrors(nextErrors);

    // include avatarError if you want to block submission
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors);
      return;
    }

    try {
      await onSubmit?.({
        name: name.trim(),
        message: message.trim(),
        location: {
          country: safeCountry,
          stateProvince: sanitizeStateProvince({
            country: safeCountry,
            stateProvince,
            statesByCountry,
          }),

          city: city.trim() || null,
          postalCode: postalCode.trim() || null,
        },
        avatarFile,
      });
    } catch {
      setFormError(
        "Something went wrong submitting your testimony. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="tf-card" noValidate>
      <h2 className="tf-title">Share Your Testimony</h2>

      {formError ? (
        <div className="tf-alert" role="alert">
          {formError}
        </div>
      ) : null}

      <AvatarUploader
        id={`${formId}-avatar`}
        file={avatarFile}
        error={avatarError}
        onFileChange={(res) => {
          if (!res) {
            setAvatarFile(null);
            setAvatarError("");
            return;
          }
          setAvatarFile(res.file);
          setAvatarError(res.error || "");
        }}
      />

      <Field id={`${formId}-name`} label="Name" required error={errors.name}>
        <input
          className="tf-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </Field>

      <fieldset className="tf-fieldset">
        <legend className="tf-legend">Location (optional)</legend>

        <CountrySelect
          id={`${formId}-country`}
          value={country}
          onChange={handleCountryChange}
          countries={countries}
          error={errors.country}
        />

        <StateProvinceField
          id={`${formId}-stateProvince`}
          countryCode={country}
          value={stateProvince}
          onChange={setStateProvince}
          statesByCountry={statesByCountry}
          error={errors.stateProvince}
        />

        <CityField
          id={`${formId}-city`}
          value={city}
          onChange={setCity}
          error={errors.city}
        />

        <PostalCodeField
          id={`${formId}-postalCode`}
          value={postalCode}
          onChange={setPostalCode}
          error={errors.postalCode}
        />
      </fieldset>

      <Field
        id={`${formId}-message`}
        label="Testimony"
        required
        help="Please avoid sharing private info (phone, address, banking details)."
        error={errors.message}
      >
        <textarea
          className="tf-textarea"
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>

      <div className="tf-actions">
        <button className="tf-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Submit Testimony"}
        </button>
      </div>
    </form>
  );
}
